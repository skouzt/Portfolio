

export type Project = {
  title: string;
  description: string;
  fullDescription: string;
  link: string;
  image: string; 
};

export const projects: Project[] = [
  {
    title: "YC Directory",
    description: "A platform for aspiring founders to share their startup ideas and connect with investors and other professionals.",
    fullDescription: "The YC Directory is a community-driven ecosystem crafted to empower the next generation of innovators. It provides a robust, intuitive space for users to showcase their business ideas, fostering connections with potential collaborators, mentors, and investors. The platform features secure user authentication, beautifully designed project pages, and a powerful search engine, ensuring that visionary ideas find the support they need to become a reality.",
    link: "https://github.com/skouzt/YC_directory",
    image: "/images/projects/yc-directory.png",
  },
  {
    title: "Converso",
    description: "An AI companion that helps you understand any topic of any subject you like.",
    fullDescription: "Converso is an intelligent AI companion built to simplify complex topics. Using cutting-edge natural language processing, it provides clear, concise, and structured explanations on any subject, making learning accessible and engaging for everyone.",
    link: "https://github.com/skouzt/project2",
    image: "/images/projects/converso.png",
  },
  {
  title: "Mira - AI Voice Therapist",
  description: "A calming AI voice therapist that listens, understands, and guides you through emotional wellness.",
  fullDescription: "Mira is an AI-powered voice therapist designed to support mental wellness. Through natural conversations, it helps users manage stress, track mood patterns, and practice guided therapeutic exercises. With a warm, intuitive interface, Mira creates a safe space for self-reflection and growth.",
  link: "https://github.com/skouzt/ai_therapist",
  image: "/images/projects/Mira.png",
},

];