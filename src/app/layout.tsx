import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar/Sidebar';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portafolio Johana Sevillano",
  description: "Versión corregida con estilos funcionando",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} text-gray-800 font-sans`}>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr_80px] font-sans bg-gray-50 text-gray-800">

          {/* Columna Izquierda - Sidebar */}
          <aside className="hidden md:flex flex-col sticky top-0 h-screen border-r border-gray-200 bg-white shadow-sm overflow-hidden">
            <Sidebar />
          </aside>

          {/* Columna Central - Contenido Principal */}
          <main className="md:col-span-1 overflow-y-auto bg-white">
            {children}
          </main>

          {/* Columna Derecha - Links de Redes Sociales */}
          <aside className="hidden md:flex flex-col items-center justify-center sticky top-0 h-screen border-l border-gray-200 bg-white shadow-sm p-4 gap-8">
            {/* Título "Links"*/}
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Links</h3> 
            {/* Icono de GitHub */}
            <a href="https://github.com/johanasev" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 hover:text-indigo-600 transition-colors transform hover:scale-110">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7c-2.782.613-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.607.069-.607 1.002.072 1.531 1.029 1.531 1.029.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.107-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.275.098-2.651 0 0 .84-.268 2.75 1.025A9.28 9.28 0 0112 6.865c.854.004 1.705.114 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.376.202 2.398.099 2.651.64.698 1.028 1.591 1.028 2.682 0 3.83-2.339 4.673-4.566 4.924.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.178.577.687.479C19.146 20.187 22 16.42 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Icono de LinkedIn */}
            <a href="https://www.linkedin.com/in/johanasevillano/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 hover:text-indigo-600 transition-colors transform hover:scale-110">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zM.02 24h4.96v-14h-4.96v14zM24 24h-4.96v-7.9c0-1.802-.033-4.122-2.506-4.122-2.508 0-2.887 1.954-2.887 3.996v8.026h-4.96v-14h4.757v2.189h.067c.661-1.268 2.277-2.6 4.698-2.6C21.848 9.589 24 11.583 24 16.921v7.079z" />
              </svg>
            </a>
          </aside>
        </div>
      </body>
    </html>
  );
}
