import React from 'react';

type Lenguaje = {
    nombre: string;
    porcentaje: number;
};

const lenguajes: Lenguaje[] = [
    { nombre: 'HTML', porcentaje: 80 },
    { nombre: 'CSS', porcentaje: 70 },
    { nombre: 'JavaScript', porcentaje: 60 },
    { nombre: 'SQL', porcentaje: 65 },
    { nombre: 'Python', porcentaje: 60 },
];

export default function Lenguajes() {
    return (
        <div className="mt-6">
            {/* Título */}
            <h3 className="mb-1 text-base font-bold text-gray-800">Lenguajes de Programación</h3> 
            <ul className="space-y-2"> {/* espaciado entre elementos */}
                {lenguajes.map((lenguaje) => (
                    <li key={lenguaje.nombre}>
                        <div className="flex justify-between text-xs text-gray-600 mb-1"> {/*espaciado texto y barra */}
                            <span>{lenguaje.nombre}</span>
                            <span>{lenguaje.porcentaje}%</span>
                        </div>
                        {/* Contenedor barra*/}
                        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                            {/* Barra de progreso */}
                            <div
                                className="h-full rounded-full bg-green-400" // h-full para que ocupe la altura del padre
                                style={{ width: `${lenguaje.porcentaje}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
