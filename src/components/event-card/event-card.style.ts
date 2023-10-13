import styled from "styled-components";

export const EventCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;

  .event-image {
    img {
      width: 100%;
      animation: anim 0.4s linear;

      @keyframes anim {
        from {
          transform: rotateY(-180deg) rotateX(360deg) rotateX(-180deg);
        }
        to {
          transform: rotateY(0deg) rotateZ(0deg) rotateX(0deg);
        }
      }
    }
  }

  .event-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    padding: var(--padding-1);
    min-height: 40vh;
    color: white;
    font-size: 1.5rem;

    button {
      width: 50%;
      color: white;
      background-color: var(--marvel-red);
      padding: 0.5rem;

      a {
        text-decoration: none;
        color: white;
      }
    }
    h1,
    p,
    button {
      padding: 0.5rem;
      font-family: var(--font-marvel);
    }
  }
`;
