import Link from "next/link";
import AboutHero from "@/components/AboutHero";
import { Linkedin, Github, FileText, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <AboutHero />

      {/* CONTENT */}
      <section className="flex-1 overflow-y-auto bg-white px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* BIO */}
          <section className="grid gap-8 items-start">
            {/* TEXT */}
            <div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I’m a software developer focused on building clean, performant and
                user-centered experiences. I work mainly in web and mobile apps,
                creating interfaces that are both visually refined and technically solid.
              </p>

              
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="https://www.linkedin.com/in/julio-cesar-cardenas-alvarado-535134140/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black underline hover:text-neutral-500 transition"
              >
                <Linkedin size={16} />
                LinkedIn →
              </Link>

              <Link
                href="https://github.com/julioccardenas-85"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black underline hover:text-neutral-500 transition"
              >
                <Github size={16} />
                GitHub →
              </Link>

              <a
                href="/cv/Resume_Julio_Cardenas.pdf"
                download
                className="flex items-center gap-2 text-black underline hover:text-neutral-500 transition"
              >
                <FileText size={16} />
                Download CV →
              </a>

              <a
                href="mailto:julioccardenas85@gmail.com"
                className="flex items-center gap-2 text-black underline hover:text-neutral-500 transition"
              >
                <Mail size={16} />
                Contact me →
              </a>
            </div>

          </section>


          {/* SKILLS */}
          <section>
            <h2 className="text-2xl text-black font-semibold mb-6">Core skills</h2>
            <h2 className="text-black font-semibold mb-6">Frontend</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "HTML & CSS",
                "JavaScript / TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Vuetify",
                "Angular",
                "Blazor",
                "Tailwind CSS",
                "Bootstrap",
                "Git / GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-neutral-300 text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h2 className="text-black font-semibold mb-6">Backend</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "REST APIs",
                ".NET",
                "C#",
                "Java",
                "Node.js",
                "Express.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-neutral-300 text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h2 className="text-black font-semibold mb-6">Mobile</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "iOS",
                "Swift",
                "React Native",
                "Android",
                "Java"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-neutral-300 text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h2 className="text-black font-semibold mb-6">Databases</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "SQL Server",
                "MySQL",
                "SQLite"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-neutral-300 text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h2 className="text-black font-semibold mb-6">Cloud</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "AWS",
                "Netlify"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-neutral-300 text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* EXPERIENCE / APPROACH */}
          <section>
            <h2 className="text-2xl text-black font-semibold mb-4">How I work</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              I care deeply about details, accessibility and maintainability.
              Whether I’m working on a freelance project or as part of a team, I
              focus on clear communication, scalable architecture and polished
              user interfaces.
            </p>

            <Link
              href="/"
              className="text-sm text-black underline hover:text-neutral-500"
            >
              View projects →
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
