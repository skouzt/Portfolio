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
import RevealOnScroll, {
  RevealStaggerContainer,
  RevealStaggerItem,
} from "@/components/ui/RevealOnScroll";

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
        {/* Hero Section with Staggered Animation */}
        <RevealStaggerContainer
          staggerDelay={0.15}
          animation="fade"
          duration={0.8}
          viewport={{ margin: "50px" }}
        >
          <section
            id="home"
            className="relative w-full min-h-[40rem] flex items-center justify-center px-4 text-center"
          >
            <div className="flex flex-col items-center justify-center">
              <RevealStaggerItem>
                <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
                  Rashid Kamar
                </h2>
              </RevealStaggerItem>

              <RevealStaggerItem>
                <p className="text-md sm:text-lg mt-2 text-white/90">
                  Software Engineer & Computer Science Student
                </p>
              </RevealStaggerItem>

              <RevealStaggerItem>
                <p className="text-sm mt-1 text-white/70 sm:text-lg">
                  Crafting seamless digital experiences with code and
                  creativity.
                </p>
              </RevealStaggerItem>
            </div>
          </section>
        </RevealStaggerContainer>

        {/* About Section */}
        <RevealOnScroll
          animation="slideUp"
          delay={0.1}
          duration={0.6}
          distance={30}
          threshold={0.2}
        >
          <section id="about" className="relative w-full py-10 sm:py-20">
            <div className="flex flex-col items-center justify-center relative w-full px-4">
              <AboutMe />
            </div>
          </section>
        </RevealOnScroll>

        {/* Education Section */}
        <RevealOnScroll
          animation="slideUp"
          delay={0.1}
          duration={0.7}
          distance={25}
          threshold={0.15}
        >
          <section
            id="education"
            className="relative w-full overflow-hidden py-10 sm:py-20"
          >
            <div className="flex flex-col relative w-full overflow-hidden">
              <RevealOnScroll animation="fade" delay={0.2} duration={0.5}>
                <div className="text-center items-center justify-between px-4">
                  <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
                    Education
                  </h2>
                  <p className="text-sm mt-1 text-white/70">
                    My academic journey and the educational foundation that
                    supports my technical expertise
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll
                animation="slideUp"
                delay={0.3}
                duration={0.7}
                distance={20}
              >
                <div className="relative w-full overflow-clip transform scale-x-[-1]">
                  <EducationTimeline />
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </RevealOnScroll>

        {/* Experience Section */}
        <RevealOnScroll
          animation="slideUp"
          delay={0.1}
          duration={0.7}
          distance={25}
          threshold={0.15}
        >
          <section
            id="experience"
            className="relative w-full overflow-hidden py-10 sm:py-20"
          >
            <div className="flex flex-col relative w-full overflow-hidden">
              <RevealOnScroll animation="fade" delay={0.15} duration={0.5}>
                <div className="text-center items-center justify-between px-4">
                  <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
                    Work Experience
                  </h2>
                  <p className="text-sm mt-1 text-white/70">
                    My professional journey and the experiences that have shaped
                    my development career
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll
                animation="slideUp"
                delay={0.25}
                duration={0.7}
                distance={20}
              >
                <div className="relative w-full overflow-clip">
                  <Timelinedata />
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </RevealOnScroll>

        {/* Skills Section */}
        <RevealOnScroll
          animation="slideUp"
          delay={0.1}
          duration={0.7}
          distance={25}
          threshold={0.2}
        >
          <section
            id="skills"
            className="relative w-full overflow-hidden py-10 sm:py-20"
          >
            <div className="flex flex-col relative w-full overflow-hidden">
              <RevealOnScroll animation="fade" delay={0.15} duration={0.5}>
                <div className="text-center px-4">
                  <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center">
                    Skills & Expertise
                  </h2>
                  <p className="mt-1 text-sm text-white/70">
                    Technologies and tools I use to bring ideas to life
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll
                animation="slideUp"
                delay={0.25}
                duration={0.6}
                distance={20}
              >
                <div className="mt-8 sm:mt-12">
                  <InfiniteMovingCards
                    items={skillsData}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                  />
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </RevealOnScroll>

        {/* Projects Section */}
        <RevealOnScroll
          animation="slideUp"
          delay={0.1}
          duration={0.7}
          distance={30}
          threshold={0.1}
          viewport={{ margin: "50px" }}
        >
          <section id="projects" className="relative w-full py-10 sm:py-20">
            <div className="flex flex-col items-center justify-center relative w-full">
              <div className="container mx-auto px-4">
                <ProjectsSection />
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Contact Section */}
        <RevealOnScroll
          animation="fade"
          delay={0.1}
          duration={0.6}
          threshold={0.2}
          viewport={{ margin: "50px" }}
        >
          <div>
            <ContactSection />
          </div>
        </RevealOnScroll>
      </main>
    </>
  );
};

export default Page;
