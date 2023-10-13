import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100vw;
  background-color: var(--marvel-red);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 50px;
  }

  #footer1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;

    p {
      text-align: center;
    }
  }

  #footer2 {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }


`;
