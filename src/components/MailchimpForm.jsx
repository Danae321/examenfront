import { Newsletter } from "./Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import '../styles/MailchimpForm.css';  // Importando el archivo CSS

export const MailchimpForm = () => {
  const postUrl = `${import.meta.env.VITE_REACT_APP_MAILCHIMP_URL}?u=${import.meta.env.VITE_REACT_APP_MAILCHIMP_U}&id=${import.meta.env.VITE_REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mailchimp-form"> {/* Añadido contenedor para los estilos */}
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};
