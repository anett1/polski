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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const RegularButton = styled(Button)`
  margin-right: 10px;
`;

function StyledButton({ variant, children, onClick }) {
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

  return <Component onClick={onClick}>{children}</Component>;
}

export default StyledButton;
