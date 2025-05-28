import React from 'react';

type Conocimiento = {
  titulo: string;
  descripcion: string;
  icono: string; // URL del icono SVG
};

const conocimientos: Conocimiento[] = [
  {
    titulo: 'Análisis de Datos',
    descripcion: 'Capacidad para transformar datos en información útil para la toma de decisiones.',
    icono: '/icons/data.svg', 
  },
  {
    titulo: 'Diseño Gráfico',
    descripcion: 'Más de 6 años de experiencia en diseño editorial y publicitario.',
    icono: '/icons/design.svg', 
  },
  {
    titulo: 'Power BI',
    descripcion: 'Creación de dashboards interactivos para marketing y reporting financiero.',
    icono: '/icons/powerbi.svg', 
  },
  {
    titulo: 'Marketing Digital',
    descripcion: 'Diseño y administración de redes y páginas web, análisis, seguimiento y mejoras.',
    icono: '/icons/marketing.svg', 
  },
  {
    titulo: 'Gestión de Proyectos', 
    descripcion: 'Experiencia en metodologías ágiles aplicadas a la gestión de equipos.',
    icono: '/icons/projects.svg',
  },
  {
    titulo: 'Resolución de Problemas',
    descripcion: 'Habilidad para identificar y solucionar desafíos de manera eficiente y creativa.',
    icono: '/icons/psolving.svg',
  },
];

export default function Conocimientos() {
  return (
    <section className="mb-12 px-2 sm:px-6"> {/* manejo de padding horizontal*/}
      {/* Título y subtítulo */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Mi Conocimiento
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Aquí algunas de las habilidades y áreas en las que tengo experiencia.
        </p>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* sm:grid-cols-2 para móviles grandes/tablets, lg:grid-cols-3 para desktops */}
        {conocimientos.map((item) => (
          <div
            key={item.titulo}
            // Estilo de la tarjeta
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Contenedor del icono*/}
            <div className="bg-green-500 p-4 rounded-full mb-4 inline-flex items-center justify-center"> 
              {/* Icono */}
              <img src={item.icono} alt={item.titulo} className="w-10 h-10 text-blue-600" /> {/* tamaño del icono */}
            </div>
            
            {/* Título tarjeta */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.titulo}</h3>
            
            {/* Descripción tarjeta */}
            <p className="text-sm text-gray-600">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
