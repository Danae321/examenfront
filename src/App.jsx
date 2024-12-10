import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/home" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Coloca el Footer fuera de Routes */}
      </div>
    </Router>
  );
}

export default App;
