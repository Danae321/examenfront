import { MailchimpForm } from "./MailchimpForm";
import { SocialLinks } from "./SocialLinks"; // Importamos el nuevo componente
import '../styles/Footer.css';  // Importando el archivo CSS

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <MailchimpForm />
        <SocialLinks /> {/* Aquí se muestran las redes sociales */}

        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="mt-4">&copy; 2024. Todos los derechos son reservados</p>
        </div>
      </div>
    </footer>
  );
};
