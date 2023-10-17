import styled from "styled-components";

export const CreatorPageStyle = styled.main`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  #title {
    font-family: var(--font-marvel);
    font-size: 32px;
  }
  ul {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid var(--marvel-red);
    padding: 1rem;

    #loading {
        
      font-family: var(--font-marvel);
      color: white;
      background-color: var(--marvel-red);
      padding: 8px;
      border-radius: 8px;
      &:hover {
        cursor: not-allowed;
      }
    }
    #load-more-button {
      font-family: var(--font-marvel);
      color: white;
      background-color: var(--marvel-red);
      padding: 8px;
      border-radius: 8px;
    }
  }

  #creator-comics {
  }

  #creator-series {
    color: white;
    background-color: black;
  }
`;
