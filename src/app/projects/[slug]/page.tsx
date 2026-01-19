import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ImageThumbnail from "@/components/ImageThumbnail";
import ProjectHero from "@/components/ProjectHero";
import ProjectPageTransition from "@/components/ProjectPageTransition";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const total = projects.length;

  const prevProject =
    projects[(currentIndex - 1 + total) % total];
  const nextProject =
    projects[(currentIndex + 1) % total];

  return (
    <ProjectPageTransition slug={slug}>
      <main className="h-screen flex flex-col overflow-hidden">
        <ProjectHero
          title={project.title}
          description={project.description}
          tech={project.tech}
          demo={project.demo}
          github={project.github}
          prevSlug={prevProject.slug}
          nextSlug={nextProject.slug}
          position={currentIndex + 1}
          total={total}
        />

        {/* IMAGES */}
        <section className="flex-1 overflow-y-auto bg-white px-6 py-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
            {project.images.map((img, index) => (
              <ImageThumbnail
                key={img}
                images={project.images}
                startIndex={index}
                alt={project.title}
              />
            ))}
          </div>
        </section>
      </main>
    </ProjectPageTransition>
  );
}
