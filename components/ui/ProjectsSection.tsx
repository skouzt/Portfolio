'use client';

// Import the new component that contains the full project grid and modal logic
import { ExpandableProjectCard } from '@/components/ui/expandable-project-card'; 

const ProjectsSection: React.FC = () => {
  // All state (isModalOpen, selectedProject) and functions (openModal, closeModal) 
  // are now handled internally within ExpandableProjectCard.

  // We only render the new, self-contained component.
  return (
    <div id="projects" className="py-20">
      {/* The ExpandableProjectCard component contains the H2 title, 
        the project grid, and the modal logic.
      */}
      <ExpandableProjectCard />
    </div>
  );
};

export default ProjectsSection;