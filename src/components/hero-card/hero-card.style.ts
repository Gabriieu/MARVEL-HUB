import styled from "styled-components";

export const HeroCardStyle = styled.li`
  width: 40vw;
  min-height: 35vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-bottom-right-radius: 10%;

  img {
    width: 100%;
    height: 60%;
  }

  div {
    height: 40%;
    padding: var(--padding-1);

    h1 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.9);

    div {
      animation: animacao 0.7s both;

      @keyframes animacao {
        from {
          height: 0;
        }
        to {
          background: var(--marvel-red);
          border-bottom-right-radius: 10%;
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
  }

  @media (min-width: 1440px) {
    width: 15vw;
  }
`;
