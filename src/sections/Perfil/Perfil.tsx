'use client';
import React, { useState } from 'react';

export default function Perfil() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <section className="mb-12 px-2 sm:px-6">
      {/* Contenedor principal de la tarjeta */}
      <div className="rounded-xl bg-white p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-left gap-6 md:gap-8 relative z-10">
          {/* Imagen de perfil */}
          <img
            src="/johana.jpg" 
            alt="Johana Sevillano"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white object-cover shadow-lg -mt-20 md:mt-0 md:self-start flex-shrink-0"
          />

          {/* Contenedor texto y botón */}
          <div className="flex flex-col items-center md:items-start flex-grow"> 
            {/* Título principal */}
            <h1 className="mt-4 md:mt-0 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Soy Johana Sevillano
            </h1>
            {/* Subtitulo */}
            <p className="mt-1 text-xl md:text-2xl font-semibold text-gray-700">
              Analista de Datos y Marketing
            </p>
            {/* Descripción */}
            <p className="mt-4 text-gray-600 max-w-xl">
              Soy analista de datos con enfoque en visualización, diseño y marketing digital. Me gusta crear soluciones creativas que conecten con las personas.
            </p>
            {/* Botón */}
            <button
              onClick={() => setMostrarModal(true)} 
              className="mt-6 rounded-full bg-yellow-500 px-8 py-3 text-base font-bold text-gray-900 transition-colors hover:bg-yellow-600 shadow-md"
            >
              Saber más
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl" // Aumenté el tamaño de la 'x'
            >
              ✖
            </button>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Más sobre mí</h3>
            <p className="text-sm text-gray-700">
              Tengo más de 6 años de experiencia combinando el diseño gráfico, la gestión de bases de datos, el análisis de métricas y la mejora continua en distintos sectores. Me apasiona visualizar datos de forma clara, precisa y estética. Disfruto aprender, colaborar en equipo y afrontar retos que exijan creatividad y lógica.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
