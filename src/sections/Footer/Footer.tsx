import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-sm text-gray-600 bg-gray-50 rounded-b-xl shadow-inner">
      <p>
        © {new Date().getFullYear()} Johana Sevillano — Hecho con <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, <span className="font-semibold">TailwindCSS</span> y ☕
      </p>
      <p className="mt-2 text-xs">Diseño basado en plantilla de Figma (créditos en README)</p>
    </footer>
  );
}
