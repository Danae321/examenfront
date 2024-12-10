import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Contact.css'; // Asegúrate de importar los estilos

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: 'Todos los campos son obligatorios' });
      return;
    }

    setButtonText("Enviando...");
    setIsLoading(true);

    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setIsLoading(false);
      setButtonText("Enviar");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: 'Mensaje enviado con éxito' });
      } else {
        setStatus({ success: false, message: 'Algo salió mal, por favor intente nuevamente más tarde.' });
      }
    } catch (error) {
      setIsLoading(false);
      setButtonText("Enviar");
      setStatus({ success: false, message: 'Error de red. Por favor intente nuevamente más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-1/2">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contáctanos" />
              }
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contactate Conmigo</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="input-field" />
                      </div>
                      <div className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="input-field" />
                      </div>
                      <div className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} className="input-field" />
                      </div>
                      <div className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} className="input-field" />
                      </div>
                      <div className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} className="input-field"></textarea>
                      </div>
                      <div className="px-1">
                        <button type="submit" disabled={isLoading} className="submit-btn">
                          <span>{buttonText}</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      {status.message && 
                        <p className={status.success ? "success" : "danger"}>{status.message}</p>
                      }
                    </div>
                  </form>
                </div>
              }
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
}
