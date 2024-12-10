import '../styles/Skills.css';  // Importando el archivo CSS

export const Skills = () => {
  return (
    <section id="skills" className="skills-section py-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-black">
      <div className="container mx-auto text-center">
        <div className="relative flex items-center justify-center mb-8">
          <h1 className="skills-title">Habilidades</h1>
        </div>
        
        {/* Skill Bars */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">HTML</h6>
                <h6 className="skill-percentage">50%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-blue-500" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">CSS</h6>
                <h6 className="skill-percentage">55%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-purple-600" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">C++</h6>
                <h6 className="skill-percentage">70%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-red-500" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">FRAMEWORKS</h6>
                <h6 className="skill-percentage">55%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-purple-600" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">PHP</h6>
                <h6 className="skill-percentage">30%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-red-500" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">Javascript</h6>
                <h6 className="skill-percentage">30%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-red-500" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">Angular JS</h6>
                <h6 className="skill-percentage">5%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-gray-800" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">React</h6>
                <h6 className="skill-percentage">60%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-teal-500" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">SQL</h6>
                <h6 className="skill-percentage">55%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-purple-600" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <h6 className="skill-name">NoSQL</h6>
                <h6 className="skill-percentage">40%</h6>
              </div>
              <div className="skill-bar">
                <div className="progress bg-teal-500" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="mb-6" style={{ animationDelay: "0s" }}>
            {/* Contenido de HTML */}
            </div>
            <div className="mb-6" style={{ animationDelay: "0.2s" }}>
              {/* Contenido de CSS */}
            </div>
            <div className="mb-6" style={{ animationDelay: "0.4s" }}>
              {/* Contenido de PHP */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
