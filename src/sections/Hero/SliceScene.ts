import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Timer,
  WebGLRenderer,
} from 'three';
import { animate } from 'animejs';

/*
 * Hero illustration: a point-sampled irregular mass with an imaging "slice"
 * plane sweeping through it. Points close to the plane are drawn in the
 * accent colour, a nod to segmentation work on medical images.
 *
 * Plain three.js, kept outside React. The component only creates it,
 * forwards resize/visibility and calls dispose().
 */

interface SliceSceneOptions {
  ink: string;
  accent: string;
  animated: boolean;
}

const POINT_COUNT = 5200;
const SCAN_RANGE = 1.05;

const vertexShader = /* glsl */ `
  uniform float uScan;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vSlice;
  varying float vDepth;

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vec4 view = viewMatrix * world;

    vSlice = 1.0 - smoothstep(0.0, 0.045, abs(world.y - uScan));
    vDepth = smoothstep(-6.4, -4.0, view.z);

    gl_PointSize = uSize * uPixelRatio * (1.0 + vSlice * 0.9) * (3.5 / -view.z);
    gl_Position = projectionMatrix * view;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uInk;
  uniform vec3 uAccent;
  uniform float uReveal;
  varying float vSlice;
  varying float vDepth;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;

    vec3 color = mix(uInk, uAccent, vSlice);
    float alpha = mix(0.14, 0.62, vDepth) + vSlice * 0.4;
    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0) * uReveal);
  }
`;

/** Radius of the mass in a given direction: a sphere with a few low-frequency bumps. */
function surfaceRadius(x: number, y: number, z: number) {
  return (
    1 +
    0.14 * Math.sin(3.1 * x + 0.6) * Math.cos(2.3 * y) +
    0.09 * Math.sin(4.7 * z + 1.3 * y) +
    0.05 * Math.cos(6.2 * x - 3.4 * z)
  );
}

function createMassGeometry() {
  const positions = new Float32Array(POINT_COUNT * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < POINT_COUNT; i++) {
    // Fibonacci sphere gives an even distribution without clumping.
    const y = 1 - (i / (POINT_COUNT - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const x = Math.cos(theta) * ring;
    const z = Math.sin(theta) * ring;

    // About a fifth of the points sit inside the surface to give it volume.
    const shell = i % 5 === 0 ? 0.55 + (0.35 * ((i * 7919) % 100)) / 100 : 1;
    const r = surfaceRadius(x, y, z) * shell;

    positions.set([x * r, y * r * 0.92, z * r], i * 3);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  return geometry;
}

function createSlicePlane(color: Color) {
  const size = 1.2;
  const corners = [
    [-size, 0, -size],
    [size, 0, -size],
    [size, 0, size],
    [-size, 0, size],
  ];
  const vertices = corners.flatMap((corner, i) => [...corner, ...corners[(i + 1) % corners.length]]);

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  const material = new LineBasicMaterial({ color, transparent: true, opacity: 0 });
  return new LineSegments(geometry, material);
}

export class SliceScene {
  private renderer: WebGLRenderer;
  private scene = new Scene();
  private camera = new PerspectiveCamera(35, 1, 0.1, 50);
  private group = new Group();
  private points: Points<BufferGeometry, ShaderMaterial>;
  private plane: LineSegments<BufferGeometry, LineBasicMaterial>;
  private uniforms: {
    uScan: { value: number };
    uSize: { value: number };
    uPixelRatio: { value: number };
    uInk: { value: Color };
    uAccent: { value: Color };
    uReveal: { value: number };
  };
  private pointer = { x: 0, y: 0 };
  private tilt = { x: 0, y: 0 };
  private timer = new Timer();
  private frame = 0;
  private running = false;
  private container: HTMLElement;
  private animated: boolean;

  constructor(container: HTMLElement, options: SliceSceneOptions) {
    this.container = container;
    this.animated = options.animated;

    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    this.uniforms = {
      uScan: { value: 0.25 },
      uSize: { value: 3.2 },
      uPixelRatio: { value: this.renderer.getPixelRatio() },
      uInk: { value: new Color(options.ink) },
      uAccent: { value: new Color(options.accent) },
      uReveal: { value: this.animated ? 0 : 1 },
    };

    const material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    this.points = new Points(createMassGeometry(), material);
    this.plane = createSlicePlane(new Color(options.accent));

    this.group.add(this.points);
    this.group.rotation.set(0.35, -0.6, 0.08);
    this.scene.add(this.group, this.plane);

    this.placeCamera();

    this.resize();
    container.addEventListener('pointermove', this.onPointerMove);
    container.addEventListener('pointerleave', this.onPointerLeave);

    if (this.animated) {
      animate(this.uniforms.uReveal, { value: 1, duration: 1800, delay: 300, ease: 'outQuad' });
      animate(this.group.scale, {
        x: [0.82, 1],
        y: [0.82, 1],
        z: [0.82, 1],
        duration: 2200,
        delay: 300,
        ease: 'outExpo',
      });
      animate(this.plane.material, { opacity: 0.35, duration: 1200, delay: 1200, ease: 'outQuad' });
    } else {
      this.plane.material.opacity = 0.35;
      this.syncPlane();
    }

    this.renderOnce();
  }

  resize() {
    const { clientWidth, clientHeight } = this.container;
    if (clientWidth === 0 || clientHeight === 0) return;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight, false);
    this.renderOnce();
  }

  /** Starts or pauses the render loop, e.g. when the canvas scrolls out of view. */
  setRunning(running: boolean) {
    if (!this.animated || running === this.running) return;
    this.running = running;
    if (running) {
      this.timer.reset();
      this.frame = requestAnimationFrame(this.tick);
    } else {
      cancelAnimationFrame(this.frame);
    }
  }

  dispose() {
    this.setRunning(false);
    this.container.removeEventListener('pointermove', this.onPointerMove);
    this.container.removeEventListener('pointerleave', this.onPointerLeave);
    this.points.geometry.dispose();
    this.points.material.dispose();
    this.plane.geometry.dispose();
    this.plane.material.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  private tick = (timestamp: number) => {
    this.timer.update(timestamp);
    const elapsed = this.timer.getElapsed();
    const delta = Math.min(this.timer.getDelta(), 0.05);

    this.uniforms.uScan.value = Math.sin(elapsed * 0.45) * SCAN_RANGE;
    this.syncPlane();

    // Slow spin, plus a gentle camera drift towards the pointer. Moving the
    // camera (not the scene) keeps the slice plane horizontal in world space,
    // which is what the shader compares against.
    this.tilt.x += (this.pointer.x - this.tilt.x) * 0.04;
    this.tilt.y += (this.pointer.y - this.tilt.y) * 0.04;
    this.group.rotation.y += delta * 0.12;
    this.placeCamera();

    this.renderOnce();
    this.frame = requestAnimationFrame(this.tick);
  };

  private placeCamera() {
    this.camera.position.set(this.tilt.x * 1.1, 1.7 - this.tilt.y * 0.8, 4.9);
    this.camera.lookAt(0, 0, 0);
  }

  private syncPlane() {
    this.plane.position.y = this.uniforms.uScan.value;
  }

  private renderOnce() {
    this.renderer.render(this.scene, this.camera);
  }

  private onPointerMove = (event: PointerEvent) => {
    const rect = this.container.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  };

  private onPointerLeave = () => {
    this.pointer.x = 0;
    this.pointer.y = 0;
  };
}
