import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme: { theme } }) => theme.primary};
    }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme: { theme } }) => theme.text};
`;
