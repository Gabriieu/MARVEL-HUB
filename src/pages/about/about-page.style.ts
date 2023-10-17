import styled from "styled-components";
import backgroundImage from "../../assets/about-background.jpg";

export const AboutPageStyle = styled.main`
  padding-top: 75px;
  display: flex;
  flex-direction: row;

  > div {
    margin: 0 0 1rem 0;
    h1 {
      font-family: var(--font-marvel);
      font-size: 24px;
      margin-bottom: 1rem;
    }
    p {
      text-align: justify;
      font-family: var(--font-marvel);
      font-size: 18px;
    }

    div {
      padding: 2rem;

      ol{
        li{
            padding: 1rem 0 1rem 0;

            h2{
                padding-bottom: 1rem;
            }
        }
      }
    }
  }

  #background {
    display: none;
  }

  @media (min-width: 1024px) {
    #background {
      display: block;
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: inset 100vw 0 0 0 rgba(0, 0, 0, 0.5);
      min-width: 35vw;
      margin: unset;
      border-left: 2px solid var(--marvel-red);
    }
  }
  @media (min-width: 1440px) {
    >div{
        h1, h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
    }
  }
`;

export const AboutContainer = styled.div`
  background-color: black;
  color: white;
`;
export const ObjectiveContainer = styled.div``;

export const MarvelContainer = styled.div`
  background-color: black;
  color: white;
`;

export const ObsContainer = styled.div``;
