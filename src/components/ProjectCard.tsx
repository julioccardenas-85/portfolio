"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  github?: string;
  demo?: string;
  images: string[];
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const thumbnail = project.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="
        group rounded-2xl bg-white border border-neutral-200
        overflow-hidden hover:shadow-xl transition
      "
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 bg-neutral-100">
        <Image
          src={thumbnail}
          alt={project.title}
          fill
          className="
            object-contain p-4
            transition-transform duration-300
            group-hover:scale-[1.03]
          "
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-neutral-900 mb-2">
          {project.title}
        </h3>

        <p className="text-neutral-600 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            See project →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
