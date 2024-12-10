import React from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Ruta de la imagen
import "../styles/Projects.css"; // Archivo CSS

export const Projects = () => {
  const projects = [
    {
      description: "Laptop Screen Simulation",
      htmlUrl: "http://127.0.0.1:5500/1index.html", // URL del diseño HTML
    },
    {
      description: "Laptop Screen Simulation",
      htmlUrl: "http://localhost:3000/", // URL del diseño React
    },
  ];

  return (
    <section id="projects" className="project">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2>Proyectos</h2>
        </div>

        <div className="flex justify-between gap-8">
          {/* Columna izquierda */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-300 mt-4">
              Desarrollé un diseño de página web completamente responsiva utilizando <strong>HTML y CSS</strong>. 
              Consiste en una estructura de página con diseño atractivo y funcional que se adapta a diferentes dispositivos (móviles, tabletas y escritorios).
            </p>
            {/* Proyecto HTML */}
            {projects[0] && (
              <div className="mt-6">
                <ProjectCard {...projects[0]} />
                <div className="laptop-screen-simulation mt-6">
                  <iframe
                    src={projects[0].htmlUrl}
                    title={`${projects[0].description} Design Simulation`}
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Columna derecha */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-300 mt-4">
              Creé una página web interactiva utilizando <strong>React.js</strong>, que incluye una interfaz de usuario dinámica y componentes reutilizables. 
              Este proyecto resalta mis habilidades en desarrollo web y en la creación de aplicaciones modernas.
            </p>
            {/* Proyecto React */}
            {projects[1] && (
              <div className="mt-6">
                <ProjectCard {...projects[1]} />
                <div className="laptop-screen-simulation mt-6">
                  <iframe
                    src={projects[1].htmlUrl}
                    title={`${projects[1].description} Design Simulation`}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Imagen de fondo */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background decoration"
      />
    </section>
  );
};
