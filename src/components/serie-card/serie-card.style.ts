import styled from "styled-components";

export const SerieCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.7rem;
  border-radius: 8px;
  width: 250px;

  img {
    width: 250px;
    max-height: 230px;
  }

  h2 {
    font-family: var(--font-marvel);
    text-align: center;
  }

  @media (min-width: 1440px) {
    width: 250px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 11px 11px 11px rgba(0, 0, 0, 0.5);
    background-color: white;
    color: black;

  }
`;
