import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa'; 

export default function DatosContacto() {
  // Color base para los iconos
  const iconColorClass = "text-yellow-600"; 
  const iconSizeClass = "h-5 w-5"; // tamaño del icono 

  return (
    <div className="mt-6 space-y-3 text-sm text-gray-700">
      {/* Ubicación */}
      <div className="flex items-center gap-2">
        <FiMapPin className={`${iconColorClass} ${iconSizeClass}`} />
        <span>Medellín, Colombia</span>
      </div>

      {/* Teléfono */}
      <div className="flex items-center gap-2">
        <FiPhone className={`${iconColorClass} ${iconSizeClass}`} />
        <span>+57 319 696 0915</span>
      </div>

      {/* Correo Electrónico */}
      <div className="flex items-center gap-2">
        <FiMail className={`${iconColorClass} ${iconSizeClass}`} />
        <span>johanasev@gmail.com</span>
      </div>

      {/* GitHub - Usando FaGithub para el icono */}
      <div className="flex items-center gap-2">
        <FaGithub className={`${iconColorClass} ${iconSizeClass}`} /> 
        <a
          href="https://github.com/johanasev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-600 transition-colors" // Color hover texto para el enlace
        >
          github.com/johanasev
        </a>
      </div>
    </div>
  );
}
