import React from 'react';

export default function InfoPersonal() {
  return (
    <div className="text-center p-4">
      <img
        src="/johana.jpg" 
        alt="Johana Sevillano"
        className="mx-auto mb-4 h-32 w-32 rounded-full object-cover shadow-md border-2 border-white" 
      />
      <h2 className="text-xl font-bold text-gray-800">Johana Sevillano</h2> 
      <p className="text-sm text-gray-500">Analista de Datos y Marketing</p>
    </div>
  );
}
