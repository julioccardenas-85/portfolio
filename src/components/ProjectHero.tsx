"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  prevSlug: string;
  nextSlug: string;
  position: number;
  total: number;
};

export default function ProjectHero({
  title,
  description,
  tech,
  demo,
  github,
  prevSlug,
  nextSlug,
  position,
  total,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        sticky top-0 z-20 bg-neutral-950 text-white
        h-[280px] md:h-[35vh]
        flex items-center border-b border-neutral-800
      "
    >
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center justify-between mb-4 text-sm text-neutral-400">
          <Link href="/" className="hover:text-white transition">
            ← Home
          </Link>

          <span>
            {position} / {total}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-neutral-400 max-w-3xl mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm">
          {demo && (
            <a href={demo} target="_blank" className="hover:text-white">
              Live demo →
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className="hover:text-white">
              GitHub →
            </a>
          )}


          <div className="ml-auto flex gap-4">
            <Link
              href={`/projects/${prevSlug}`}
              className="text-neutral-400 hover:text-white transition"
            >
              ← Anterior
            </Link>
            <Link
              href={`/projects/${nextSlug}`}
              className="text-neutral-400 hover:text-white transition"
            >
              Siguiente →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
