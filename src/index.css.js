import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
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
