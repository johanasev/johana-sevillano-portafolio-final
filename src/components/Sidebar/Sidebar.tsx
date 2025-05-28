import React from 'react';
import InfoPersonal from './InfoPersonal'; 
import DatosContacto from './DatosContacto';
import Idiomas from './Idiomas';
import Lenguajes from './Lenguajes';
import Habilidades from './Habilidades';


export default function Sidebar() {
  return (
    <div className="flex flex-col p-6 w-full h-full overflow-y-auto"> {/* Ajustamos padding */}
      <InfoPersonal />
      <DatosContacto />
      <Idiomas />
      <Lenguajes />
      <Habilidades />
    
    </div>
  );
}