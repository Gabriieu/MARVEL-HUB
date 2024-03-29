import styled from "styled-components";
//import backgroundImage from "../../assets/background-image.jpg";
import backgroundImage2 from "../../assets/background-image-2.jpg";
import gif from "../../assets/marvel-gif.gif"

export const HeroPageStyle = styled.main`
  width: 100vw;
  padding-top: 75px;
  background-image: url(${backgroundImage2});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  box-shadow: inset 100vw 0 0 0 rgba(0, 0, 0, 0.8);
`;

export const ContainerTopSection = styled.section`
  height: 50vh;
  background-image: url(${gif});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  box-shadow: inset 100vw 0 0 0 rgba(0, 0, 0, 0.8);
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

    h1 {
      font-size: 2.5rem;
      text-shadow: 1px 2px black;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      text-shadow: 0.5px 0 black, -0.5px 0 black, 0 0.5px black, 0 -0.5px black,
        0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black,
        -0.5px 0.5px black;
      font-family: cursive;
      font-weight: 900;
    }

    @media(min-width: 1024px){
      max-width: 50%;
    }
  }
`;

export const ContainerBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .characters-title {
    padding: var(--padding-1);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: black;
    border-radius: 0 0 20% 20%;
    margin-bottom: 1rem;

    h1 {
      font-family: var(--font-marvel);
      color: white;
      font-size: 3rem;
      text-shadow: 2px 2px var(--marvel-red);
      text-shadow: 0.5px 0 var(--marvel-red), -0.5px 0 var(--marvel-red),
        0 0.5px var(--marvel-red), 0 -0.5px var(--marvel-red),
        0.5px 0.5px var(--marvel-red), -0.5px -0.5px var(--marvel-red),
        0.5px -0.5px var(--marvel-red), -0.5px 0.5px var(--marvel-red);
    }
  }

  #search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    position: relative;

    input {
      padding: 0.5rem;
      height: 100%;
      border-radius: 16px;
    }

    div {
      padding: 0;
      border-radius: 50%;
    }
  }

  #results-length {
    color: white;
    font-family: var(--font-marvel);
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    h2 {
      padding-left: 1rem;
      font-family: var(--font-marvel);
      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .pagination {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg:hover {
      cursor: pointer;
    }

    h1 {
      font-family: var(--font-marvel);
      color: white;
      font-size: 2rem;
    }
  }
`;
