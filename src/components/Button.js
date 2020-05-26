import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";

/*const RootButton = styled.button`
  &:focus {
    outline: 0;
    outline-style: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;*/

const AudioButton = styled(Button)`
  padding: 0.1rem 0.1rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const RegularButton = styled(Button)`
  /*margin-bottom: ${({ theme }) => theme.interspace.standard};*/
`;

function StyledButton({ variant, width, size, children, onClick }) {
  const Component = useMemo(() => {
    switch (variant) {
      case "audio":
        return AudioButton;
      case "regular":
        return RegularButton;

      default:
        return RegularButton;
    }
  }, [variant]);

  return (
    <Component style={{ width: width }} size={size} onClick={onClick}>
      {children}
    </Component>
  );
}

export default StyledButton;
