"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
// import { useOutsideClick } from "@/hooks/use-outside-click"; // Assume this hook is available
import { projects, Project } from '@/data/projects'; // Import your projects data

// Helper component for the close icon
export const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-white" 
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

export function ExpandableProjectCard() {
    const [active, setActive] = useState<Project | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    // Placeholder for useOutsideClick hook (replace with your actual hook)
    const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    callback();
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, [ref, callback]);
    };
    
    useOutsideClick(ref, () => setActive(null));

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    const projectCards = projects.map(project => ({
        ...project,
        ctaText: 'View on GitHub',
        ctaLink: project.link, 
    }));


   return (
        <section className="py-12 sm:py-20 px-4" id="projects">
            <h2 className="relative text-2xl sm:text-3xl md:text-5xl md:leading-tight tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-center mb-10 sm:mb-12">My Projects</h2>
            
            <AnimatePresence>
                {/* Backdrop Overlay */}
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-[10000] transform translate-z-0" 
                    />
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {/* Expanded Modal Content */}
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-[10001] p-4"> {/* Changed p-0 sm:p-4 to p-4 for margin */} 
                        
                        {/* Close Button */}
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            // NOTE: Positioned outside the modal on desktop, but should be visible on mobile
                            className="flex absolute top-4 right-4 items-center justify-center bg-neutral-900 border border-neutral-800 rounded-full h-8 w-8 z-20"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        
                        {/* Modal Card - UPDATED CLASSES HERE */}
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            // 🛑 CRITICAL CHANGE: Use max-h-[90vh] instead of h-full for mobile.
                            // Added rounded-xl for small screens to ensure visible border/backdrop.
                            className="w-full max-w-lg md:max-w-xl h-auto max-h-[90vh] flex flex-col bg-neutral-900 shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800"
                        >
                            {/* Image */}
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    width={800}
                                    height={450}
                                    src={active.image}
                                    alt={active.title}
                                    // Reduced max-h for the image on smaller screens to save vertical space
                                    className="w-full h-auto max-h-52 sm:max-h-80 object-cover object-top rounded-t-xl sm:rounded-t-2xl"
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                                {/* ... content structure remains the same ... */}
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <div className="flex-1">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-white text-2xl mb-1"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 transition text-white flex items-center shrink-0"
                                    >
                                        <FaGithub className="mr-2 h-4 w-4" /> View
                                    </motion.a>
                                </div>
                                
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-400 text-sm md:text-base pt-2"
                                >
                                    <p>{active.fullDescription}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>


            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                {projectCards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-800/80 transition-colors shadow-md"
                    >
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={500}
                                    height={300}
                                    src={card.image}
                                    alt={card.title}
                                    className="h-48 w-full rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-start items-start flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-white text-base mt-2"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-400 text-sm"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}