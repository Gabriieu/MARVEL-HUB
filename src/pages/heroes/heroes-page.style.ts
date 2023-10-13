import styled from "styled-components";
import backgroundImage from "../../assets/background-image.jpg";

export const HeroPageStyle = styled.main`
  padding-top: 75px;
`;

export const ContainerTopSection = styled.section`
  height: 50vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 0px 175px 175px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;

  div {
    height: 100%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;

    h1,
    p {
      font-family: var(--font-marvel);
    }

    h1 {
      font-size: 2rem;
      text-shadow: 1px 2px var(--marvel-red);
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      text-shadow: 0.5px 0 var(--marvel-red), -0.5px 0 var(--marvel-red),
        0 0.5px var(--marvel-red), 0 -0.5px var(--marvel-red),
        0.5px 0.5px var(--marvel-red), -0.5px -0.5px var(--marvel-red),
        0.5px -0.5px var(--marvel-red), -0.5px 0.5px var(--marvel-red);
    }
  }
`;

export const ContainerBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    padding: var(--padding-1);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
      background-color: rgba(0,0,0,.9);
      border-radius: 0 0 20% 20%;
      margin-bottom: 1rem;

    h1 {
      font-family: var(--font-marvel);
      color: white;
      font-size: 3rem;
      text-shadow: 2px 2px var(--marvel-red);      text-shadow: 0.5px 0 var(--marvel-red), -0.5px 0 var(--marvel-red),
        0 0.5px var(--marvel-red), 0 -0.5px var(--marvel-red),
        0.5px 0.5px var(--marvel-red), -0.5px -0.5px var(--marvel-red),
        0.5px -0.5px var(--marvel-red), -0.5px 0.5px var(--marvel-red);
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;
