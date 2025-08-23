'use client';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { SiVuedotjs, SiGraphql, SiFigma, SiDocker } from 'react-icons/si';

export type Skill = {
  name: string;
  category: string;
  icon: React.ElementType; 
};

export const skillsData: Skill[] = [
  { name: 'HTML', category: 'Frontend', icon: FaHtml5 },
  { name: 'CSS', category: 'Frontend', icon: FaCss3Alt },
  { name: 'JavaScript', category: 'Frontend', icon: FaJsSquare },
  { name: 'React', category: 'Frontend', icon: FaReact },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss },
  { name: 'Node.js', category: 'Backend', icon: FaNodeJs },
  { name: 'Express.js', category: 'Backend', icon: SiExpress },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb },
  { name: 'Python', category: 'Backend', icon: FaPython },
  { name: 'Git', category: 'Tools', icon: FaGitAlt },
  { name: 'Vue.js', category: 'Frontend', icon: SiVuedotjs },
  { name: 'GraphQL', category: 'API', icon: SiGraphql },
  { name: 'Figma', category: 'Design', icon: SiFigma },
  { name: 'Docker', category: 'Tools', icon: SiDocker },
];