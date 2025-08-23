"use client";

export default function AboutMe() {
  const interests = [
    "UI Design",
    "Web Animation",
    "Music",
    "Travel",
    "Coffee",
  ];

  return (
    <section id="about" className="flex justify-center items-center py-20">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-3 xl rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-6">About Me</h2>

        <div className="text-gray-300 space-y-4 text-center leading-relaxed">
          <p>
            I&apos;m a dedicated{" "}
            <span className="text-blue-400 font-medium">Software Engineer</span>{" "}
            and Computer Science student who believes in the power of{" "}
            <span className="text-blue-400">beautiful, functional design</span>.
            My journey in tech is driven by an obsession with creating{" "}
            <span className="text-blue-400">seamless user experiences</span> that
            bridge the gap between complex technology and human intuition.
          </p>

          <p>
            When I&apos;m not crafting{" "}
            <span className="text-blue-400">pixel-perfect interfaces</span> or
            diving deep into the latest{" "}
            <span className="text-blue-400">React frameworks</span>, you&apos;ll
            find me exploring the intersection of{" "}
            <span className="text-blue-400">creativity and code</span>. I believe
            that great software isn&apos;t just functional—it&apos;s{" "}
            <span className="text-blue-400">inspiring</span>.
          </p>

          <p>
            Currently pursuing my degree while building{" "}
            <span className="text-blue-400">innovative web applications</span>{" "}
            that solve real-world problems. I&apos;m always eager to{" "}
            <span className="text-blue-400">collaborate</span> on projects that
            push the boundaries of what&apos;s possible on the web.
          </p>
        </div>

        {/* Interests */}
        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-4">When I&apos;m not coding</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800/80 text-gray-300 border border-white/10 hover:bg-neutral-700 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
