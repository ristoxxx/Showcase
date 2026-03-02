/*
 * File: Footer.tsx
 * Created Date: Sunday March 1st 2026 09:27:17
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday March 1st 2026 09:28:09
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2026 ristoxxx@github.com
 */

export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-500">
      © {new Date().getFullYear()} – built with React & Tailwind
    </footer>
  );
}