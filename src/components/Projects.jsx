/*
 * File: Projects.tsx
 * Created Date: Sunday March 1st 2026 09:26:59
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday March 1st 2026 11:09:32
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2026 ristoxxx@github.com
 */

import ProjectCard from "./ProjectCard";

// Lisää projektidataa tänne
const projectData = [
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  {
    title: "Projektin nimi",
    description: "Lyhyt kuvaus projektista.",
    link: "https://github.com/YOURUSERNAME/projekti",
    image: "/images/projekti.png"
  },
  // lisää projekteja...
];

export default function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {projectData.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </section>
  );
}