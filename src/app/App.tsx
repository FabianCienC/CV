import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { Contact } from '../sections/Contact/Contact';
import { Education } from '../sections/Education/Education';
import { Experience } from '../sections/Experience/Experience';
import { Hero } from '../sections/Hero/Hero';
import { Profile } from '../sections/Profile/Profile';
import { Projects } from '../sections/Projects/Projects';
import { Research } from '../sections/Research/Research';
import { Skills } from '../sections/Skills/Skills';

export function App() {
  return (
    <>
      <a href="#profile" className="visually-hidden">
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
