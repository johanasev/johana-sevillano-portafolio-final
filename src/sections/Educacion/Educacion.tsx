import React from 'react';

type EducacionItem = {
  institucion: string;
  titulo: string;
  fechas: string;
  descripcion: string;
};

const educacion: EducacionItem[] = [
  
  {
    institucion: 'Universidad de Antioquia',
    titulo: 'Ingeniería de Sistemas (en curso)',
    fechas: '2020 - Actualidad',
    descripcion: 'Estudios centrados en el diseño, desarrollo e implementación de soluciones tecnológicas, abarcando desarrollo web, fundamentos de programación, arquitectura de software, bases de datos y sistemas operativos para llegar a soluciones integrales.',
  },
  
  {
    institucion: 'Udemy / LinkedIn Learning / Coursera',
    titulo: 'Cursos en Power BI y Data modeling, Data governance, Data Analysis with Python',
    fechas: '2021-2022',
    descripcion: 'Formación intensiva en análisis y visualización de datos, manejo de bases de datos relacionales y creación de dashboards interactivos.',
  },

  {
    institucion: 'Institución Universitaria Pascual Bravo',
    titulo: 'Diseño Gráfico',
    fechas: '2015 - 2017',
    descripcion: 'Enfocado en diseño editorial, publicitario y desarrollo de fundamentos de comunicación visual para marcas.',
  },
  
];

export default function Educacion() {
  return (
    <section className="mb-12 px-2 sm:px-6">
      {/* Título y subtítulo */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Mi Educación
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un resumen de mi trayectoria académica y el desarrollo de mis habilidades.
        </p>
      </div>

      <div className="relative space-y-8">
        {/* Línea vertical para la línea de tiempo */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>

        {educacion.map((item, index) => (
          <div
            key={item.institucion}
            // usamos la tarjeta que en conocimientos pero adaptada en el row
            className="flex flex-col md:flex-row items-start md:items-stretch relative z-10"
          >
            {/* Punto en la línea de tiempo*/}
            <div className="hidden md:flex flex-col items-center mx-4">
                <div className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-sm flex-shrink-0"></div>
            </div>

            {/* Contenido tarjeta educación */}
            {/* Si es impar, la tarjeta va a la izquierda, si es par, a la derecha */}
            <div className={
                `bg-white rounded-xl shadow-lg p-6 flex-grow transition-transform hover:scale-[1.02] hover:shadow-xl
                ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ` // margen para alternar lados
            }>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.titulo}</h3>
                <p className="text-base text-indigo-600 font-medium mb-2">{item.institucion}</p> 
                <p className="text-sm text-gray-500 mb-3">{item.fechas}</p> 
                <p className="text-sm text-gray-700">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
