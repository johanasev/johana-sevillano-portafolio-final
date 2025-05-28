import Perfil from '@/sections/Perfil/Perfil';
import Conocimientos from '@/sections/Conocimientos/Conocimientos';
import Educacion from '@/sections/Educacion/Educacion';
import Portafolio from '@/sections/Portafolio/Portafolio';
import Footer from '@/sections/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Perfil />
      <Conocimientos />
      <Educacion />
      <Portafolio />
      <Footer />
    </div>
  );
}
