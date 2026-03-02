/*
 * File: ProjectCard.tsx
 * Created Date: Sunday March 1st 2026 09:27:09
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday March 1st 2026 09:27:55
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2026 ristoxxx@github.com
 */

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden hover:border-white transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block underline"
        >
          Näytä GitHub
        </a>
      </div>
    </div>
  );
}