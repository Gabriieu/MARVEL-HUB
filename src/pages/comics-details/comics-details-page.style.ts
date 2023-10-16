import styled from "styled-components";
import background from "../../assets/background-image-3.jpg";

export const ComicsDetailsPageStyle = styled.main`
  padding-top: 75px;
`;

export const Container = styled.section`
  width: 100vw;
  padding: 1rem;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  #title {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      margin-bottom: 0.5rem;
      font-weight: 800;
      font-size: 1.2rem;
    }

    p {
      text-align: justify;
    }
  }

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding-right: 5rem;
    font-size: 1.5rem;
    background-color: unset;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: inset 100vw 0 0 0 rgba(0, 0, 0, 0.92);

    img {
      height: 70vh;
      width: auto;
    }
  }
`;

export const ContainerDetails = styled.section`
  width: 100vw;
  padding: 1rem;
  padding-top: 3rem;
  background-color: var(--grey--scale--grey-1);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #details {
    display: flex;
    flex-direction: column;
    >h1{
        margin-bottom: 2rem;
    }

    #team-roles {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      .name,
      .role {
        font-family: var(--font-marvel);
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding-left: 5vw;
    flex-direction: row;
    gap: 200px;
  }
`;
