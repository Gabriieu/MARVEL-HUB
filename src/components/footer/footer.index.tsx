import { FooterStyle } from "./footer.style";
import marvelM from "../../assets/marvel-m.png";
import linkedinLogo from "../../assets/linkedin-logo.png";
import gitHubLogo from "../../assets/github-logo.webp";

export const Footer = () => {
  return (
    <FooterStyle>
      <section id="footer1">
        <img src={marvelM} alt="MARVEL" />
        <p>
          Este site não possui vínculos com a Marvel e não é endossado,
          patrocinado ou afiliado de nenhuma forma pela Marvel Entertainment,
          LLC. Todos os personagens, logotipos e outros materiais relacionados à
          Marvel são marcas registradas e propriedade da Marvel Entertainment,
          LLC. Todos os direitos autorais e marcas registradas são utilizados
          aqui apenas para fins informativos e não comerciais.
        </p>
      </section>
      <section id="footer2">
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jos%C3%A9gabrielsouza/"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/Gabriieu">
            <img src={gitHubLogo} alt="GitHub" />
          </a>
        </div>
      </section>
    </FooterStyle>
  );
};
