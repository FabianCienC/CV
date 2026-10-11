import { SiteFooter } from '../components/SiteFooter/SiteFooter';
import { SiteHeader } from '../components/SiteHeader/SiteHeader';
import { Contact } from '../sections/Contact/Contact';
import { Education } from '../sections/Education/Education';
import { Experience } from '../sections/Experience/Experience';
import { Hero } from '../sections/Hero/Hero';
import { Projects } from '../sections/Projects/Projects';
import { Research } from '../sections/Research/Research';
import { Skills } from '../sections/Skills/Skills';

/*
 * Section order follows how a recruiter reads a CV: who you are (Hero),
 * where you work now, what you studied, then supporting detail.
 * See REVISOR_CV.md for the reasoning.
 */
export function App() {
  return (
    <>
      <a href="#experience" className="visually-hidden">
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Research />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
