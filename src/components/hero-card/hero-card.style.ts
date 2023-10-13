import styled from "styled-components";

export const HeroCardStyle = styled.li`
  width: 40vw;
  min-height: 35vh;
  background-color: rgba(0,0,0,.9);
  color: white;
  border-bottom-right-radius: 10%;

  img {
    width: 100%;
    height: 60%;
  }

  div{
    height: 40%;
    padding: var(--padding-1);
  }
`;
