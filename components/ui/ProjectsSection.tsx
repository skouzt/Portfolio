'use client';
import React, { useState } from 'react';
import { MinimalCard, MinimalCardImage, MinimalCardTitle, MinimalCardDescription } from '@/components/ui/minimalcard';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { projects, Project } from '@/data/projects';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20">
    <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} onClick={() => openModal(project)} className="cursor-pointer bg-neutral-900 border border-neutral-800 rounded-2xl p-4 hover:bg-neutral-800/80 transition-colors shadow-md">
            <MinimalCardImage src={project.image} alt={project.title} />
            <MinimalCardTitle>{project.title}</MinimalCardTitle>
            <MinimalCardDescription>{project.description}</MinimalCardDescription>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
          <p className="text-neutral-400 mb-4">{selectedProject.fullDescription}</p>
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-auto rounded-lg mb-4"
          />
          <Button asChild className="w-full mt-4">
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" /> View on GitHub
            </a>
          </Button>
        </Modal>
      )}
    </section>
  );
};

export default ProjectsSection;