/*
 * File: Hero.tsx
 * Created Date: Sunday March 1st 2026 09:25:35
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday March 1st 2026 09:26:19
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2026 ristoxxx@github.com
 */

export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-4xl font-bold">Hei 👋</h1>
      <p className="mt-4 text-lg">Olen kehittäjä ja esittelen projektejani alla 👇</p>
      <div className="mt-6 space-x-4">
        <a href="https://github.com/YOURUSERNAME" className="underline">GitHub</a>
        <a href="https://linkedin.com/in/YOURPROFILE" className="underline">LinkedIn</a>
        <a href="/cv.pdf" className="underline">CV</a>
      </div>
    </section>
  );
}