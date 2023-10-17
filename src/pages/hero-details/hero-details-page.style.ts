import styled from "styled-components";
import characterBackground from "../../assets/character-background.avif";

export const HeroDetailsMainStyle = styled.main`
  padding-top: 75px;
`;

export const HeroDetailsSectionPageStyle = styled.section`
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  background-image: url(${characterBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 0px 175px 175px rgba(0, 0, 0, 0.6);

  #character-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }

  #character-description {
    width: 100vw;
    background-color: black;
    color: white;
    padding: var(--padding-1);
    background-color: rgba(0, 0, 0, 0.9);

    h1 {
      font-size: 2rem;
      font-family: var(--font-marvel);
      padding: 1rem;
    }

    p {
      font-size: 1.5rem;
      font-family: var(--font-marvel);
      padding-bottom: 2rem;
      padding: 1rem;
    }

    @media (min-width: 1024px) {
      border-radius: 8px;
      height: 40vh;
    }
  }

  img {
    height: 40vh;
    max-width: 100%;
    border: 2px solid var(--marvel-red);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding-bottom: 2rem;
    border-bottom: 5px solid black;
  }
`;

export const HeroComicsSectionPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  #character-latest-comics {
    width: 100%;
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;

    h1 {
      font-family: var(--font-marvel);
      font-size: 2rem;
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: row;
      overflow: scroll;
      gap: 1.5rem;
      width: 100%;
    }

    #see-all-comics {
      background-color: var(--marvel-red);
      padding: 0.5rem;
      border-radius: 8px;
      color: white;
      font-size: unset;
      font-family: var(--font-marvel);
      text-align: center;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  #empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: var(--font-marvel);
      font-size: 1.5rem;
      color: var(--marvel-red);
    }
    img {
      width: 100%;
      max-width: 400px;
    }
  }

  @media (min-width: 1024px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const HeroSeriesSectionPageStyle = styled.section`
  background-color: black;

  #character-latest-series {
    color: white;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;

    h1 {
      font-family: var(--font-marvel);
      font-size: 2rem;
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: row;

      overflow: scroll;
      gap: 1.5rem;
      width: 100%;
    }

    #see-all-series {
      background-color: var(--marvel-red);
      padding: 0.5rem;
      border-radius: 8px;
      color: white;
      font-size: unset;
      font-family: var(--font-marvel);
      text-align: center;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  #empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-family: var(--font-marvel);
      font-size: 1.5rem;
      color: var(--marvel-red);
    }
    img {
      width: 100%;
      max-width: 400px;
    }
  }
  @media (min-width: 1024px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
