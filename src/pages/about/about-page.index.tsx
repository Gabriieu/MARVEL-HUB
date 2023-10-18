import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header/header.index";
import {
  AboutContainer,
  AboutPageStyle,
  MarvelContainer,
  ObjectiveContainer,
  ObsContainer,
} from "./about-page.style";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutPageStyle>
        <div>
          <AboutContainer>
            <h1>SOBRE MIM</h1>
            <p>
              Olá, sou José Gabriel, um entusiasta de tecnologia de 25 anos. Sou
              formado em desenvolvimento web full stack e atualmente estudante
              de engenharia de computação. Minha paixão por tecnologia e
              programação me levou a projetos empolgantes e desafios criativos.
              Estou animado para compartilhar meu portfólio, que reflete minha
              dedicação e experiência na área de desenvolvimento web. Através de
              uma abordagem multidisciplinar, busco criar soluções inovadoras e
              eficazes. Apresento este projeto pessoal onde você encontrará
              exemplos do meu trabalho em desenvolvimento web."
            </p>
          </AboutContainer>
          <ObjectiveContainer>
            <h1>Objetivo</h1>
            <ol>
              <li>
                <h2>Exploração de Personagens</h2>
                <p>
                  O site permite aos visitantes mergulharem no rico catálogo de
                  personagens da Marvel. Eles podem pesquisar, visualizar perfis
                  detalhados e descobrir informações abrangentes sobre seus
                  heróis e vilões favoritos.
                </p>
              </li>
              <li>
                <h2>Acesso a Quadrinhos e Séries</h2>
                <p>
                  Os entusiastas dos quadrinhos e fãs de séries da Marvel podem
                  encontrar facilmente informações sobre publicações, prefácio
                  dos quadrinhos, seus respectivos criadores, datas de
                  lançamento e mais.
                </p>
              </li>
              <li>
                <h2>Perfis de Criadores</h2>
                <p>
                  O projeto oferece um espaço dedicado a homenagear os
                  talentosos criadores por trás das histórias da Marvel. Os
                  visitantes podem explorar as obras notáveis e contribuições
                  desses artistas e escritores.
                </p>
              </li>
              <li>
                <h2>Experiência Informativa</h2>
                <p>
                  O projeto visa oferecer uma experiência informativa e
                  envolvente, com detalhes e informações precisas. É um recurso
                  valioso tanto para fãs casuais quanto para aficionados que
                  desejam aprofundar seu conhecimento.
                </p>
              </li>
              <li>
                <h2>Intuitivo e Responsivo</h2>
                <p>
                  A usabilidade é fundamental. O site foi projetado para ser
                  intuitivo e responsivo, garantindo que os usuários possam
                  navegar facilmente em dispositivos móveis, tablets e
                  computadores.
                </p>
              </li>
            </ol>
          </ObjectiveContainer>
          <MarvelContainer>
            <h1>
              <strong>Marvel e Direitos Autorais</strong>
            </h1>
            <p>
              Este site é um projeto pessoal e não possui afiliação oficial com
              a Marvel Entertainment. Todos os personagens, logotipos e outros
              materiais relacionados à Marvel são marcas registradas e
              propriedade da Marvel Entertainment. Todas as informações, imagens
              e outros conteúdos relacionados à Marvel são usados aqui apenas
              para fins informativos e não comerciais, com o devido respeito aos
              direitos autorais e marcas registradas.
            </p>
            <p>
              A API utilizada é gratuita e pode ser acessada  <a target="_blank" href="https://developer.marvel.com/">neste link</a>
            </p>
          </MarvelContainer>
          <ObsContainer>
            <h1>Observações Importantes</h1>
            <p>
              <h1>Limitações</h1>
              Por limitação da API da Marvel, a chave utilizada neste projeto
              para as requisições dos dados tem um limite diário de 3000
              requisições, portanto é possível que você não consiga usufruir
              100% da aplicação caso esse limite diário já tenha sido atingido.
              Vale ressaltar também que a API pode impôr um delay entre as
              requisições caso o usuário (você) faça muitas requisições em um
              intervalo pequeno de tempo. (caso o timeout de 7 segundos seja
              atingido, aguarde alguns segundos e recarregue a página).
            </p>
            <p>
              Os dados estão disponíveis em inglês devido à limitação da API,
              que fornece as informações exclusivamente nesse idioma.
            </p>
            <p>
              <h1>Bugs</h1>
              Como parte da minha prática regular, faço revisões constantes e
              busco por possíveis falhas nos meus projetos. Portanto, se você
              encontrar algum bug ou problema, é possível que eu ainda não tenha
              identificado ou esteja no processo de correção. Ficarei muito
              grato se você puder me informar sobre qualquer falha diretamente
              pelo <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9gabrielsouza/">LinkedIn</a>. A sua contribuição é valiosa e apreciada!
            </p>
          </ObsContainer>
        </div>
        <div id="background"></div>
      </AboutPageStyle>
      <Footer />
    </>
  );
};
