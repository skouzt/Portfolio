import React from 'react';
import { skillsData, Skill } from '@/data/icons'; // Adjust the import path

// Define props for the SkillIcon component
type SkillIconProps = {
  icon: string;
};

// Helper to render an icon.
const SkillIcon: React.FC<SkillIconProps> = ({ icon }) => {
  return <i className={`${icon} text-4xl text-white`}></i>;
};

const Skills: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="z-10 text-center">
        <h1 className="relative text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Skills & Expertise
        </h1>
        <p className="mt-1 text-sm text-white/60">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skillsData.map((skill: Skill, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-neutral-800 rounded-lg shadow-md hover:bg-neutral-700 transition-colors duration-300"
          >
            <div className="mb-4">
              <SkillIcon icon={skill.icon} />
            </div>
            <p className="text-white text-base font-semibold mb-1">{skill.name}</p>
            <p className="text-neutral-400 text-xs">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;