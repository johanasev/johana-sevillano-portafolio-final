import React from 'react';

type Idioma = {
    nombre: string;
    porcentaje: number;
};

const idiomas: Idioma[] = [
    { nombre: 'Español', porcentaje: 100 },
    { nombre: 'Inglés', porcentaje: 65 },
];

export default function Idiomas() {
    return (
        <div className="mt-6">
            {/* Título */}
            <h3 className="mb-1 text-base font-bold text-gray-800">Idiomas</h3> 
            <ul className="space-y-2"> {/* espaciado entre elementos */}
                {idiomas.map((idioma) => (
                    <li key={idioma.nombre}>
                        <div className="flex justify-between text-xs text-gray-600 mb-1"> {/* espaciado entre texto y barra */}
                            <span>{idioma.nombre}</span>
                            <span>{idioma.porcentaje}%</span>
                        </div>
                        {/* Contenedor de la barra */}
                        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                            {/* Barra de progreso */}
                            <div
                                className="h-full rounded-full bg-indigo-500" // h-full para que ocupe la altura del padre
                                style={{ width: `${idioma.porcentaje}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
