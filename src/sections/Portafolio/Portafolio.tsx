'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Proyecto = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string; 
  detalle: string;
  link: string;
};

const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'Dashboard de Marketing',
    descripcion: 'Visualización de métricas clave de campañas de marketing digital.',
    imagen: '/proyectos/powerbi.jpg',
    detalle: 'Incluye KPIs clave, segmentación por campañas, análisis comparativo semanal y proyecciones de rendimiento. Optimizado para Power BI.',
    link: 'https://github.com/johanasev/dashboard-marketing',
  },
  {
    id: 2,
    titulo: 'Diseño de Catálogo Digital',
    descripcion: 'Creación y maquetación de un catálogo interactivo para una marca de tendencias.',
    imagen: '/proyectos/catalogo.jpg', 
    detalle: 'Diseño editorial con enfoque en la experiencia de usuario, exportado en PDF y versión web animada con interacción para usuario.',
    link: 'https://www.behance.net/johanasev',
  },
  {
    id: 3,
    titulo: 'Aplicación de Citas Médicas',
    descripcion: 'Desarrollo Full-stack de una aplicación para gestionar citas médicas.',
    imagen: '/proyectos/citas.jpg', 
    detalle: 'Frontend desarrollado con Next.js y backend con Spring Boot. Incluye CRUD de médicos y horarios, sistema de autenticación y despliegue en Vercel.',
    link: 'https://github.com/johanasev/citasalud',
  },

];

export default function Portafolio() {
  const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null);

  return (
    <section className="mb-12 px-2 sm:px-6">
      {/* Título y subtítulo*/}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Mi Portafolio
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre algunos de mis proyectos más recientes y representativos.
        </p>
      </div>

      {/* Cuadrícula de proyectos con grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* espacio entre tarjetas */}
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            // Estilo de tarjeta
            className="bg-white rounded-xl shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl overflow-hidden" // overflow-hidden para que la imagen redondee bien
          >
            {/* Imagen del proyecto */}
            <Image
              src={proyecto.imagen}
              alt={proyecto.titulo}
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-xl" // redondear solo la parte superior
            />
            <div className="p-6"> {/* Padding contenido */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.titulo}</h3>
              <p className="text-sm text-gray-600 mb-4">{proyecto.descripcion}</p>
              <button
                onClick={() => setProyectoActivo(proyecto)}
                // Estilo botón
                className="inline-flex items-center rounded-full bg-yellow-500 px-6 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-yellow-600 shadow-md"
              >
                Saber más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de proyecto */}
      {proyectoActivo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"> {/* padding en móviles */}
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto"> 
            <button
              onClick={() => setProyectoActivo(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">{proyectoActivo.titulo}</h3>
            <Image
              src={proyectoActivo.imagen}
              alt={proyectoActivo.titulo}
              width={800} 
              height={450}
              className="mb-4 w-full h-auto rounded-lg object-cover"
            />
            <p className="mb-4 text-base text-gray-700 leading-relaxed">{proyectoActivo.detalle}</p>
            {/*<a
              href={proyectoActivo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              Ver proyecto <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h6m0 0v6m0-6L10 14"></path></svg>
            </a> Para cuando tenga cargados los proyectos en un link*/}
          </div>
        </div>
      )}
    </section>
  );
}
