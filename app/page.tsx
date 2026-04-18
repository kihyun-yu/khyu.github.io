import AboutSection from '@/components/AboutSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import ProjectSection from '@/components/ProjectSection';
import SelectedPublicationsSection from '@/components/SelectedPublicationsSection';
import bibtex from '@/data/publications/Publications.bib';
import { homepageSection } from '@/data/website.config';

const educationList = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    location: 'South Korea',
    details: [
      'M.S.-Ph.D. Integrated in Industrial and Systems Engineering (03/2024 - present)',
      'Advisor: Prof. Dabeen Lee',
      'GPA: 4.2 / 4.3',
    ],
  },
  {
    institution: 'Gwangju Institute of Science and Technology (GIST)',
    location: 'South Korea',
    details: [
      'B.S. in Electrical Engineering and Computer Science (03/2018 - 02/2024)',
      'Minor in Mathematics',
      'GPA: 4.08 / 4.5 (cum laude)',
      '2 years absence for military service (2020-2021)',
    ],
  },
  {
    institution: 'University of Cambridge',
    location: 'United Kingdom',
    details: [
      'Summer Session Programme (Machine Learning) (07/2019 - 08/2019)',
    ],
  },
  {
    institution: 'Sejong Science High School',
    location: 'South Korea',
    details: ['03/2015 - 02/2018'],
  },
];

const teachingExperienceList = [
  'Teaching Assistant, Operations Research: Optimization (KAIST) (03/2024 - 06/2024)',
  'Teaching Assistant, Differential Equations (GIST) (09/2023 - 12/2023)',
  'Teaching Assistant, Single Variable Calculus (GIST) (03/2023 - 06/2023)',
];

const honorsList = [
  'Scholarship for Academic Excellence',
  'Awarded for 6 semesters (Spring 2018, Fall 2018, Spring 2019, Fall 2019, Spring 2022, Spring 2023)',
];

const experienceList = [
  {
    lab: 'Information Processing, Controlling, and Network Lab (GIST)',
    details: [
      'Undergraduate Research Intern (Advisor: Prof. Heung-No Lee) (01/2023 - 12/2023)',
      'Worked on lattice-based cryptography',
    ],
  },
  {
    lab: 'Artificial Intelligence Lab (GIST)',
    details: [
      'Undergraduate Research Intern (Advisor: Prof. Kyoobin Lee) (07/2022 - 12/2022)',
      'Worked on robust image classification under noisy labels',
    ],
  },
];

export default function Page() {
  return (
    <main className='md:w-[40rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.EducationSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Education</h1>
          <div className='flex flex-col gap-4'>
            {educationList.map((item) => (
              <div key={item.institution} className='flex flex-col gap-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='text-base font-medium'>{item.institution}</h2>
                  <span className='text-sm text-neutral-500'>{item.location}</span>
                </div>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      {homepageSection.TeachingExperienceSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Teaching Experience</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {teachingExperienceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.HonorsSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Honors</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {honorsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.ExperienceSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Experience</h1>
          <div className='flex flex-col gap-4'>
            {experienceList.map((item) => (
              <div key={item.lab} className='flex flex-col gap-1'>
                <h2 className='text-base font-medium'>{item.lab}</h2>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      {homepageSection.NewsSection && <LatestNewsSection />}
      {homepageSection.SelectedPublicationsSection && (
        <SelectedPublicationsSection bibtex={bibtex} />
      )}
      {homepageSection.ProjectSection && (
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <ProjectSection />
        </div>
      )}
    </main>
  );
}
