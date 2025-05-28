import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const habilidades: string[] = [
    'Power BI, DAX',
    'Power Query',  
    'Excel Avanzado',
    'Google Analytics',
    'Illustrator, Photoshop, InDesign',
    'IAs Generativas',
    'Metodologías ágiles',
    
];

export default function Habilidades() {
    return (
        <div className="mt-6">
            {/* Título*/}
            <h3 className="mb-1 text-base font-bold text-gray-800">Habilidades Extra</h3>
            {/* Lista*/}
            <ul className="space-y-2 text-sm text-gray-700"> {/* espaciado de la lista */}
                {habilidades.map((habilidad) => (
                    <li key={habilidad} className="flex items-center gap-2"> {/* flex y gap-2 para el icono y el texto */}
                        <FaStar className="text-yellow-500 w-3 h-3 flex-shrink-0" /> {/* tamaño de la estrella*/}
                        <span>{habilidad}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
