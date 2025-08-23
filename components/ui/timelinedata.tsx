"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Timelinedata() {
  const data = [
    {
      title: "Dec 2024 – Jun 2025",
      content: (
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white">
            Marketing Intern
          </h3>
          <p className="mt-2 text-sm text-neutral-300">
            Physics Wallah   
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-400 space-y-1">
            <li>Designed and managed monthly email & webinar campaigns.</li>
            <li>Coordinated with HR departments of partner companies.</li>
            <li>Supported promotion of IIM Sirmaur’s Digital Supply Chain course.</li>
            <li>Analyzed campaign performance using key metrics to optimize future outreach.</li>
            <li>Collaborated with cross-functional teams, including content creators and sales, to align marketing efforts.</li>
            <li>Prepared and presented reports to senior management on campaign effectiveness.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Oct 2023 – Dec 2023",
      content: (
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white">
            Campus Ambassador
          </h3>
          <p className="mt-2 text-sm text-neutral-300">
            MaterialLibrary
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-400 space-y-1">
            <li>Promoted events and initiatives among student networks.</li>
            <li>Coordinated marketing activities on campus.</li>
            <li>Enhanced brand visibility through peer outreach.</li>
            <li>Orchestrated and managed on-campus events to increase student sign-ups.</li>
            <li>Created and distributed promotional content, including posters and social media posts, tailored for the student demographic.</li>
            <li>Acted as the primary liaison between the company and the student body, gathering feedback to inform future marketing efforts.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
