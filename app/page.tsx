'use client';
import AboutMe from '@/components/ui/aboutme';
import ContactSection from '@/components/ui/ContactSection';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import ProjectsSection from '@/components/ui/ProjectsSection';
import { ShootingStars } from '@/components/ui/shooting-star';
import { StarsBackground } from '@/components/ui/stars-background';
import Timelinedata from '@/components/ui/timelinedata';
import { skillsData } from '@/data/icons';
import Image from 'next/image';

import React from 'react';

const Page = () => {
    
    const scrolldown = () => {
    const section = document.getElementById("about"); 
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <>
            <section id='home' className="h-[40rem] bg-neutral-900 flex flex-col items-center justify-center relative w-full overflow-hidden">
                <StarsBackground />
                <ShootingStars minDelay={200} maxDelay={800} />

                <div className="z-10 text-center my-4">
                    <h1 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                        Rashid Kamar
                    </h1>
                    <p className='text-md sm:text-lg mt-2 text-white/80'>Software Engineer & Computer Science Student</p>
                    <p className='text-sm mt-1 text-white/60 sm:text-lg'>Crafting seamless digital experiences with code and creativity.</p>
                </div>
                <div className='flex absolute bottom-8 sm:bottom-16 animate-bounce'>
                    <div onClick={scrolldown} className="cursor-pointer">
                        <Image
                            src="/down-arrow.svg"
                            alt="down"
                            width={20}
                            height={20}
                            className="hidden sm:block" 
                            priority
                        />
                    </div>
                </div>
            </section>

          
            <section id='about' className="bg-neutral-900 flex flex-col items-center justify-center relative w-full py-10 sm:py-20">
                <StarsBackground />
                <ShootingStars minDelay={200} maxDelay={800} />
                <div className="z-10 px-4">
                    <AboutMe />
                </div>
            </section>

            <section id="experience" className="bg-neutral-900 flex flex-col relative w-full overflow-hidden py-10 sm:py-20">
                <StarsBackground />
                <ShootingStars minDelay={200} maxDelay={800} />
                <div className='z-10 text-center items-center justify-between px-4'>
                    <h1 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                        Work Experience
                    </h1>
                    <p className='text-sm mt-1 text-white/60'>My professional journey and the experiences that have shaped my development career</p>
                </div>
                <div className="relative w-full overflow-clip">
                    <Timelinedata />
                </div>
            </section>

            <section id="skills" className="bg-neutral-900 flex flex-col relative w-full overflow-hidden py-10 sm:py-20">
                <StarsBackground />
                <ShootingStars minDelay={200} maxDelay={800} />
                <div className="z-10 text-center px-4">
                    <h1 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                        Skills & Expertise
                    </h1>
                    <p className="mt-1 text-sm text-white/60">
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
            </section>

            <section id='projects' className="bg-neutral-900 flex flex-col items-center justify-center relative w-full py-10 sm:py-20">
                <StarsBackground />
                <ShootingStars minDelay={200} maxDelay={800} />
                <div className="container mx-auto px-4 z-10">
                    <ProjectsSection />
                </div>
            </section>
            <div >
            <ContactSection />
            </div>
        </>
    );
};

export default Page;