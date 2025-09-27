"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function EducationTimeline() {
  const data = [
    {
      title: "2024 – June 2027",
      content: (
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white">
            Bachelor of Technology in Computer Science & Engineering
          </h3>
          <p className="mt-2 text-sm text-neutral-300">
            Jamia Hamdard University, New Delhi, India
          </p>
          <p className="mt-2 text-sm text-neutral-400 italic">
            Expected June 2027
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-400 space-y-1">
            <li>
              Strong foundation in mathematics, algorithms, and software
              engineering principles
            </li>
            <li>Focus on Computer Science & Engineering fundamentals</li>
            <li>Currently pursuing degree with expected graduation in 2027</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Completed June 2024",
      content: (
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white">
            Diploma in Computer Engineering
          </h3>
          <p className="mt-2 text-sm text-neutral-300">
            Jamia Millia Islamia University, New Delhi, India
          </p>
          <p className="mt-2 text-sm text-neutral-400 italic">June 2024</p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-400 space-y-1">
            <li>Equivalent practical experience through hands-on projects</li>
            <li>Technical coursework in computer engineering</li>
            <li>Foundation for advanced computer science studies</li>
            <li>Practical application of engineering principles</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data.map((item) => ({
          ...item,
          title: <div className="transform scale-x-[-1]">{item.title}</div>,
          content: <div className="transform scale-x-[-1]">{item.content}</div>,
        }))}
      />
    </div>
  );
}
