import type { CV } from '../types/cv';

/*
 * Single source of truth for the site's content.
 * Edit this file to update the CV; components only read from it.
 *
 * Tags on roles and projects should use the exact same spelling as the
 * skill names below, so the "where I've used it" lookup in the Skills
 * section can match them.
 */
export const cv: CV = {
  profile: {
    name: 'Fabián Cienfuegos Caraveo',
    shortName: 'Fabián Cienfuegos',
    headline: 'Software Engineer — AI & Cloud. Biomedical Engineer by training.',
    location: 'Chihuahua, Mexico',
    summary: [
      'I build web applications and backend services, and I spend a good part of my time on machine learning, mostly applied to medical imaging. My background is in biomedical engineering, which taught me to treat software as something that has to work reliably in the real world, not just in a demo.',
      'Day to day I work with Python, FastAPI, React, Angular, Docker and AWS. On the research side I collaborate with a university AI and medical computing lab, where I have co-authored work on mammographic mass segmentation and machine learning for diagnosis.',
      'I am looking for software engineering roles where I can build scalable, dependable systems and keep growing in cloud and AI.',
    ],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fabi%C3%A1n-cienfuegos-386484288/' },
      { label: 'GitHub', href: 'https://github.com/FabianCienC' },
      { label: 'ORCID', href: 'https://orcid.org/0009-0000-9870-7482' },
    ],
  },

  facts: [
    { label: 'Final GPA', value: 3.884, decimals: 3, suffix: ' / 4.0' },
    { label: 'Peer-reviewed publications', value: 3 },
    { label: 'AWS certification', value: 'SAA-C03' },
    { label: 'Currently at', value: 'Safran' },
  ],

  experience: [
    {
      title: 'Software Development',
      organization: 'Safran',
      location: 'Chihuahua, Mexico',
      period: 'Present',
      highlights: [
        'Developing software solutions in an industrial engineering environment, with a focus on modern web development and the Angular ecosystem.',
        'Applying software engineering practices to collaborative, production-oriented projects.',
      ],
      tags: ['Angular', 'JavaScript', 'Git'],
    },
    {
      title: 'Research Collaborator',
      organization: 'Artificial Intelligence and Medical Computing Research Laboratory (LIIACOM)',
      location: 'Chihuahua, Mexico',
      period: '2024 – Present',
      highlights: [
        'Research on artificial intelligence for medical image analysis, particularly mammographic mass segmentation.',
        'Developed and evaluated deep learning models and experimental pipelines for medical imaging.',
        'Co-authored peer-reviewed work published in Springer proceedings (IFMBE) and Applied Sciences (MDPI).',
      ],
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Medical Imaging', 'Machine Learning'],
    },
    {
      title: 'Innovation & Design Trainee',
      organization: 'Universidad Autónoma de Chihuahua',
      location: 'Chihuahua, Mexico',
      period: 'Earlier',
      highlights: [
        'Worked on technology projects involving AI, virtual reality and web applications for university departments.',
        'Helped turn department needs into practical digital tools.',
      ],
      tags: ['Machine Learning', 'JavaScript'],
    },
  ],

  researchStatement:
    'My research sits between engineering and medicine: building and evaluating deep learning models for medical images, and looking closely at where they fail. Most of my recent work is on segmenting masses in mammograms and on understanding false positives.',

  publications: [
    {
      title: 'BCSeg-IRUNet: A Hybrid Inception–Residual Encoder–Decoder for Mammographic Mass Segmentation',
      venue: 'Applied Sciences (MDPI)',
      year: 2026,
      details: 'DOI 10.3390/app16189376',
      url: 'https://doi.org/10.3390/app16189376',
    },
    {
      title: 'ML Design in Handwriting Analysis for Classification of Alzheimer’s Disease',
      venue: 'IFMBE Proceedings, Springer',
      year: 2025,
      details: 'pp. 3–13',
    },
    {
      title:
        'A Comparative Analysis of the Optimization of Machine Learning in the Diagnosis of Ocular Toxoplasmosis',
      venue: 'IFMBE Proceedings, Springer',
      year: 2025,
      details: 'pp. 319–328',
    },
  ],

  skills: [
    { name: 'Programming', items: ['Python', 'JavaScript', 'C++', 'Java'] },
    { name: 'Backend & Web', items: ['FastAPI', 'Express', 'REST APIs', 'React', 'Angular'] },
    {
      name: 'AI / ML',
      items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Medical Imaging', 'RAG / LLMs'],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'CI/CD'],
    },
    { name: 'Data', items: ['MongoDB', 'SQL', 'NumPy', 'Pandas', 'TensorFlow'] },
  ],

  projects: [
    {
      name: 'PackageLibrary',
      kind: 'Open source',
      description: 'A set of reusable React / Next.js UI packages organised as a small component ecosystem.',
      tags: ['React', 'JavaScript'],
      url: 'https://github.com/FabianCienC/PackageLibrary',
    },
    {
      name: 'Mammographic mass segmentation',
      kind: 'Research',
      description:
        'Deep learning workflow for segmenting masses in mammograms: model design, training, evaluation and analysis of false positives.',
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Medical Imaging'],
    },
    {
      name: 'Containers & CI/CD practice',
      kind: 'Coursework',
      description:
        'Hands-on repositories from Docker, Kubernetes and GitHub Actions courses: images, deployments, workflows, custom actions and pipeline security.',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Express'],
      url: 'https://github.com/FabianCienC?tab=repositories',
    },
    {
      name: 'VEX Robotics',
      kind: 'Leadership',
      description:
        'Team captain, programmer, builder, driver and designer. Competed nationally and internationally and received innovation and build awards.',
      tags: ['C++'],
    },
  ],

  education: [
    {
      title: 'B.Eng. Biomedical Engineering',
      institution: 'Universidad Autónoma de Chihuahua (UACH)',
      location: 'Chihuahua, Mexico',
      period: 'Graduated',
      notes: [
        'Final GPA 3.884 / 4.0.',
        'Focus on biomedical systems, medical imaging, artificial intelligence and engineering applications.',
      ],
    },
    {
      title: 'Academic Exchange Program',
      institution: 'The University of Arizona — Eller College of Management',
      location: 'Tucson, Arizona, USA',
      period: '2025',
      notes: [
        'Intensive program on responsible AI, machine learning fundamentals and applied AI.',
        'Selected through the Beca +Talento Chihuahua / COMEXUS scholarship.',
      ],
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
      issuer: 'Amazon Web Services',
      year: 2026,
    },
    { name: 'Angular Certified Developer', issuer: 'DW Training', year: 2025 },
    {
      name: 'Docker and Kubernetes: The Complete Course from Zero to Hero',
      issuer: 'Online course',
      year: 2025,
    },
  ],

  awards: [
    'Beca +Talento Chihuahua / COMEXUS international academic exchange, 2025.',
    'Innovation award, national Robotics and STEM competition, 2024.',
  ],

  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency' },
  ],
};
