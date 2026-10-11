import type { CV } from '../types/cv';

/*
 * Single source of truth for the site's content.
 * Edit this file to update the CV; components only read from it.
 */
export const cv: CV = {
  profile: {
    name: 'Fabián Cienfuegos Caraveo',
    shortName: 'Fabián Cienfuegos',
    headline: 'Software Engineer — AI & Cloud. Biomedical Engineer by training.',
    location: 'Chihuahua, Mexico',
    summary:
      'I’m part of the Digital Transformation team at Safran, where I build and maintain applications with Angular, .NET, React and Python, and propose cloud, on-premise and machine learning solutions. I also research deep learning for medical imaging, with three peer-reviewed publications.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fabi%C3%A1n-cienfuegos-386484288/' },
      { label: 'GitHub', href: 'https://github.com/FabianCienC' },
      { label: 'ORCID', href: 'https://orcid.org/0009-0000-9870-7482' },
    ],
  },

  facts: [
    { label: 'Currently at', value: 'Safran, Digital Transformation' },
    { label: 'AWS Certified', value: 'Solutions Architect – Associate' },
    { label: 'Peer-reviewed publications', value: 3 },
  ],

  experience: [
    {
      // TODO: exact job title and start month/year (e.g. "Mar 2026 – Present").
      title: 'Software Development',
      organization: 'Safran',
      location: 'Chihuahua, Mexico',
      period: 'Present',
      highlights: [
        'Develop and maintain applications with Angular, .NET, React and Python.',
        'Member of the Digital Transformation team: we look for problems in day-to-day processes and find ways to redesign and digitize them.',
        'Propose solution architectures for both on-premise and cloud deployments.',
        'Propose machine learning and AI solutions for process and operational problems.',
      ],
      tags: ['Angular', '.NET', 'React', 'Python', 'Machine Learning'],
    },
    {
      title: 'Research Collaborator',
      organization: 'Artificial Intelligence and Medical Computing Research Laboratory (LIIACOM)',
      location: 'Chihuahua, Mexico',
      period: '2024 – Present',
      highlights: [
        'Research AI methods for medical image analysis, focused on mammographic mass segmentation.',
        'Develop and evaluate deep learning models and experimental pipelines for medical imaging.',
        'Co-authored three peer-reviewed papers, published in Applied Sciences (MDPI) and IFMBE Proceedings (Springer).',
      ],
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Medical Imaging', 'Machine Learning'],
    },
    {
      title: 'Innovation & Design Trainee',
      organization: 'Universidad Autónoma de Chihuahua',
      location: 'Chihuahua, Mexico',
      // TODO: real start and end dates; "Earlier" reads as vague to recruiters.
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
    { name: 'Backend & Web', items: ['.NET', 'FastAPI', 'Express', 'REST APIs', 'React', 'Angular'] },
    {
      name: 'AI / ML',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Medical Imaging',
        'RAG / LLM fundamentals',
      ],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'CI/CD'],
    },
    { name: 'Data', items: ['MongoDB', 'SQL (fundamentals)', 'NumPy', 'Pandas', 'TensorFlow'] },
  ],

  projects: [
    {
      name: 'Mammographic mass segmentation',
      kind: 'Research',
      description:
        'Deep learning workflow for segmenting masses in mammograms: model design, training, evaluation and analysis of false positives.',
      tags: ['Python', 'Deep Learning', 'Computer Vision', 'Medical Imaging'],
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
      // TODO: graduation month/year.
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
      issuer: 'Udemy',
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
