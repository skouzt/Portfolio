"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 text-center relative">
      <div className="relative z-10">
        <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center ">
          Let&apos;s Work Together
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mb-10">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s create something amazing together.
        </p>

        {/* The responsive button container */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 p-10">
          {/* Get In Touch */}
          <Button
            asChild
            className="bg-blue-600 text-white hover:bg-blue-700 transition px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base w-full sm:w-auto"
          >
            <a
              href="mailto:skouzt3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>
          </Button>

          {/* Download Resume */}
          <Button
            asChild
            className="bg-neutral-800 text-white hover:bg-neutral-700 transition px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base w-full sm:w-auto"
          >
            <a href="/Resume.pdf" download="Rashid_Kamar_Resume.pdf">
              Download Resume
            </a>
          </Button>

          {/* LinkedIn */}
          <Button
            asChild
            className="border border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 transition px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base w-full sm:w-auto"
          >
            <a
              href="https://www.linkedin.com/in/rashid-kamar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          {/* GitHub */}
          <Button
            asChild
            className="border border-neutral-700 bg-transparent text-neutral-400 hover:bg-neutral-800 transition px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base w-full sm:w-auto"
          >
            <a
              href="https://github.com/skouzt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
