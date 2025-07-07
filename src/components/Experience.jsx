import React from 'react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    title: 'Embedded Systems Intern',
    company: 'Smowcode',
    date: 'Dec 2024 – Jun 2025',
    location: 'Onsite',
    tags: ['C', 'ESP-IDF', 'Teamwork'],
    description: `Learned C and embedded library development using ESP-IDF. 
    Developed and documented embedded libraries for clients, created projects using Smowcode Studio, 
    and gained hands-on experience with professional development workflows and collaboration.`,
    logo: '/logos/smowcode_logo.jpeg', // Replace with your logo path
    github: '', // Add if needed
  },
  {
    title: 'Scholar Trainee',
    company: 'SheFi',
    date: 'Jul 2025',
    location: 'Remote',
    tags: ['Scholarship', 'Wed3'],
    description: `Selected as a SheFi Scholar. Participated in sessions 14 focused on WEB3, technology, and personal growth.`,
    logo: '/logos/shefi_logo.jpeg',
    github: '',
  },
  {
    title: 'GSSoC Contributor',
    company: 'GirlScript Summer of Code',
    date: 'May 2024 – Jun 2024',
    location: 'Remote',
    tags: ['Git', 'JavaScript', 'Open Source'],
    description: `Participants contribute to real-world projects under the extreme guidance of skilled mentors. 
-Learn by actively engaging with the Open source community. 
-Learn tech stacks like git and javascript.`,
    logo: '/logos/gssc.jpg',
    github: '',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-12 ">Experience</h2>

      <div className="max-w-4xl mx-auto relative border-l-2 border-purple-600/50 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-12">
            {/* Circle logo on left */}
            <div className="absolute -left-7 top-0 w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center ring-2 ring-purple-400 shadow-md overflow-hidden">
              <img src={exp.logo} alt={exp.company} className="w-20 h-20 object-contain" />
            </div>

            {/* Experience Card */}
            <div className="bg-slate-800 border border-purple-400/30 p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
                {exp.github && (
                  <a href={exp.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-300 mb-2">{exp.date} • {exp.location}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="bg-purple-600/20 text-purple-200 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-100 whitespace-pre-line">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
