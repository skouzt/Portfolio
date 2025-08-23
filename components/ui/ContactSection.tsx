"use client";

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { StarsBackground } from '@/components/ui/stars-background'; // Corrected import path
import { ShootingStars } from '@/components/ui/shooting-star'; // Corrected import path

const ContactSection = () => {
  return (

    <section id="contact" className="bg-neutral-900 py-20 text-center">
        <StarsBackground />
        <ShootingStars minDelay={200} maxDelay={800} />
      <h2 className="text-4xl font-bold mb-4 text-white">Let's Work Together</h2>
      <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
        I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Get In Touch */}
        <Button
            asChild
            className="bg-neutral-800 text-white hover:bg-neutral-700 transition"
            >
            <a href="/Resume.pdf" download="Rashid_Kamar_Resume.pdf">
                Download Resume
            </a>
        </Button>

        
        {/* LinkedIn */}
        <Button 
          asChild 
          className="border border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 transition"
        >
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>

        {/* GitHub */}
        <Button 
          asChild 
          className="border border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 transition"
        >
          <a href="https://github.com/skouzt" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;