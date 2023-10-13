import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 75px;
  padding: var(--padding-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: var(--grey--scale--grey-0);
  z-index: 1;

  img {
    width: 62px;
  }

  li {
    color: white;
    padding: var(--padding-1);
    border-radius: var(--border-1);
    &:hover {
      cursor: pointer;
      background-color: var(--marvel-red);
      text-decoration: underline;
      transform: scale(1.1);
    }
  }
  @media (min-width: 1024px) {
    #hamb-menu {
      display: none;
    }
  }
`;

export const ContainerMobile = styled.div`
  position: fixed;
  top: 75px;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  font-size: 32px;
  z-index: 2;

  ul {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: var(--padding-2);

    li {
      display: flex;
      justify-content: space-between;
      color: var(--marvel-red);
      h1 {
        color: var(--marvel-red);
        font-family: "Marvel";
        color: white;
        font-weight: 800;
      }
      animation: anim 0.25s linear;

      @keyframes anim {
        from {
          transform: scaleX(-1);
        }
        to {
          transform: scaleX(1);
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;

export const ContainerDesktop = styled.div`
  display: none;
  nav > ul {
    display: flex;
    gap: 16px;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
