import styled from "styled-components";
import characterBackground from "../../assets/character-background.jpg";

export const HeroDetailsSectionPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  #character-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${characterBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 0px 175px 175px rgba(0, 0, 0, 0.6);
  }

  #character-description {
    height: 20vh;
    width: 100vw;
    background-color: black;
    color: white;
    padding: var(--padding-1);

    h1 {
      font-size: 2rem;
      font-family: var(--font-marvel);
    }

    p {
      font-size: 1.5rem;
      font-family: var(--font-marvel);
    }
  }

  img {
    height: 40vh;
    max-width: 100%;
    border: 2px solid var(--marvel-red);
  }
`;
