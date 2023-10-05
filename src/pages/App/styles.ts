import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background-color: ${(props) => props.theme.red};
`;
