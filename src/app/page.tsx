"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            {/* HERO */}
            <section className="
                                sticky top-0 z-20 bg-neutral-950 text-white
                                h-[280px] md:h-[35vh]
                                flex items-center justify-center
                                border-b border-neutral-800
                                ">
                <div className="text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                        Julio Cárdenas
                    </h1>
                    <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg">
                        Software Developer
                    </p>
                    <Link
                        href="/about"
                        className="text-sm text-neutral-400 hover:text-white transition mb-4 inline-block"
                    >
                        About me →
                    </Link>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="
                                flex-1 overflow-y-auto
                                bg-white text-neutral-900
                                px-6 pt-4 pb-8
                                ">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} />
                    ))}
                </div>
            </section>
        </main>
    );
}
