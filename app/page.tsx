"use client";
import AboutMe from "@/components/ui/aboutme";
import { BeamsBackground } from "@/components/ui/beams-background-optimized";
import ContactSection from "@/components/ui/ContactSection";
import EducationTimeline from "@/components/ui/educationtimeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ProjectsSection from "@/components/ui/ProjectsSection";
import { ShootingStars } from "@/components/ui/shooting-star";
import { StarsBackground } from "@/components/ui/stars-background";
import Timelinedata from "@/components/ui/timelinedata";

import { skillsData } from "@/data/icons";

import React from "react";

const Page = () => {
  return (
    <>
      {/* Fixed global background behind all content */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <BeamsBackground className="h-full min-h-screen" intensity="strong" />
        <StarsBackground />
        <ShootingStars minDelay={200} maxDelay={800} />
      </div>

      {/* Foreground content */}
      <main className="relative z-10 w-full">
        <section
          id="home"
          className="relative w-full min-h-[40rem] flex items-center justify-center px-4 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
              Rashid Kamar
            </h2>
            <p className="text-md sm:text-lg mt-2 text-white/90">
              Software Engineer & Computer Science Student
            </p>
            <p className="text-sm mt-1 text-white/70 sm:text-lg">
              Crafting seamless digital experiences with code and creativity.
            </p>
          </div>
        </section>

        <section id="about" className="relative w-full py-10 sm:py-20">
          <div className="flex flex-col items-center justify-center relative w-full px-4">
            <AboutMe />
          </div>
        </section>

        <section
          id="education"
          className="relative w-full overflow-hidden py-10 sm:py-20"
        >
          <div className="flex flex-col relative w-full overflow-hidden">
            <div className="text-center items-center justify-between px-4">
              <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
                Education
              </h2>
              <p className="text-sm mt-1 text-white/70">
                My academic journey and the educational foundation that supports
                my technical expertise
              </p>
            </div>
            <div className="relative w-full overflow-clip transform scale-x-[-1]">
              <EducationTimeline />
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="relative w-full overflow-hidden py-10 sm:py-20"
        >
          <div className="flex flex-col relative w-full overflow-hidden">
            <div className="text-center items-center justify-between px-4">
              <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center ">
                Work Experience
              </h2>
              <p className="text-sm mt-1 text-white/70">
                My professional journey and the experiences that have shaped my
                development career
              </p>
            </div>
            <div className="relative w-full overflow-clip">
              <Timelinedata />
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="relative w-full overflow-hidden py-10 sm:py-20"
        >
          <div className="flex flex-col relative w-full overflow-hidden">
            <div className="text-center px-4">
              <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center ">
                Skills & Expertise
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <div className="mt-8 sm:mt-12">
              <InfiniteMovingCards
                items={skillsData}
                direction="left"
                speed="normal"
                pauseOnHover={true}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="relative w-full py-10 sm:py-20">
          <div className="flex flex-col items-center justify-center relative w-full">
            <div className="container mx-auto px-4">
              <ProjectsSection />
            </div>
          </div>
        </section>

        <div>
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default Page;
