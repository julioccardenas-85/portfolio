import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "SpaceX Launches",
    description: "SpaceX launches information app, consuming a public API. Includes filters, pagination, detailed views, dark mode and is responsive.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "spacex-launches",
    github: "https://github.com/julioccardenas-85/spacex-rocket-launches",
    demo: "https://elegant-syrniki-110783.netlify.app/",
    images: ["/img/spacex-1.png", "/img/spacex-2.png", "/img/spacex-3.png",  
        "/img/spacex-6.png", "/img/spacex-7.png", "/img/spacex-4.png", "/img/spacex-5.png", 
        "/img/spacex-8.png"],
  },
  {
    title: "Acade-Mia",
    description: "Acade-Mia is a comprehensive academic management system designed to streamline educational processes. It features user authentication, course management, student enrollment and a responsive interface.",
    tech: ["Vue.js", "Vuetify", "JavaScript", "Bootstrap", ".NET", "C#", "MySQL"],
    slug: "acade-mia",
    github: "https://github.com/julioccardenas-85/acade-mia-frontend",
    images: ["/img/acade-mia01.png", "/img/acade-mia02.png", "/img/acade-mia03.png", 
      "/img/acade-mia04.png", "/img/acade-mia05.png", "/img/acade-mia06.png", "/img/acade-mia07.png",
       "/img/acade-mia08.png", "/img/acade-mia09.png", "/img/acade-mia10.png"],
  },
  {
    title: "EMS",
    description: "Web system for monitoring and managing tickets machines for transit services. Frontend includes dashboards, real-time data visualization and user management, built with React and deployed with AWS.",
    tech: ["React", "JavaScript", "Bootstrap", "AWS"],
    slug: "ems",
    images: ["/img/ems01.png", "/img/ems02.png", "/img/ems03.png", "/img/ems04.png", "/img/ems05.png"],
  }
];
