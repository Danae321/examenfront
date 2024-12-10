import { useState, useEffect } from "react";
import '../styles/Footer.css';  // Importando el archivo CSS

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <div className="newsletter-text newsletter-text-left">
            <h3 className="newsletter-title">Suscríbete a nuestro boletín<br />y resiviras descuentos</h3>
            {status === 'sending' && (<div className="status-message status-sending"> Enviando...</div>)}
            {status === 'error' && ( <div className="status-message status-error"> {message} </div>)}
            {status === 'success' && ( <div className="status-message status-success"> {message} </div>)}
          </div>

          <div className="newsletter-form">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full max-w-md">
              <input 
                value={email} 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email Address" 
                className="newsletter-input" 
              />
              <button 
                type="submit" 
                className="newsletter-button"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
