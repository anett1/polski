import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary}; 
}
tr {
  color: ${({ theme }) => theme.colors.primary}; 

}
`;
export default GlobalStyles;
