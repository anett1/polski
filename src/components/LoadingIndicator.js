import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../utils/theme";

const round = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;
const Content = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid ${theme.colors.primary};
    border-color: ${theme.colors.primary} transparent ${theme.colors.primary}
      transparent;
    animation: ${round} 1.2s linear infinite;
  }
`;

const LoadingIndicator = () => {
  return <Content />;
};

export default LoadingIndicator;
