import React, { useState, useEffect, useMemo } from "react";
import { Jumbotron } from "react-bootstrap";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "./AudioPlayer";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import StyledButton from "../components/Button";
import theme from "../utils/theme";

const BoxItem = ({ batchItem }) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState("");

  const checkValue = () => {
    if (value === batchItem.english || value === batchItem.polish) {
      setChecked("correct");
    } else {
      setChecked("incorrect");
    }
  };
  const Color = useMemo(() => {
    switch (checked) {
      case "":
        return theme.colors.gray;
      case "correct":
        return theme.colors.secondary;
      case "incorrect":
        return theme.colors.red;

      default:
        return theme.colors.gray;
    }
  }, [checked]);

  const Display = useMemo(() => {
    switch (checked) {
      case "":
        return "none";
      case "correct":
        return "flex";
      case "incorrect":
        return "flex";

      default:
        return "none";
    }
  }, [checked]);

  return (
    <Jumbotron
      style={{
        border: `1px solid ${Color} `,
        /* boxShadow: "0 3px 12px -6px rgba(0, 0, 0, 0.54)",*/
        position: "relative",
        background: "white",
      }}
    >
      <div
        style={{
          background: "white",
          color: `${Color}`,
          display: `${Display}`,
          justifyContent: `center`,
          alignContent: "center",
          height: "20px",
          padding: `0 ${theme.interspace.standard}`,
          position: "absolute",
          top: "-10px",
          left: "15px",
          zIndex: "99",
        }}
      >
        <p className="font-italic" style={{ fontSize: ".8rem" }}>
          {checked === "correct"
            ? `Correct, congratulations`
            : `Incorrect, try again`}
        </p>
      </div>
      <div className="text-center">
        <AudioPlayerProvider>
          <AudioPlayer file={batchItem.src} />
        </AudioPlayerProvider>

        <InputGroup size="sm" className="mb-3 mt-3">
          <FormControl
            type="text"
            placeholder="write the heard text in eng or pl"
            onChange={(e) => setValue(e.target.value)}
          />
        </InputGroup>
        <StyledButton
          onClick={checkValue}
          variant="regular"
          size="sm"
          width="25%"
        >
          check
        </StyledButton>
      </div>
    </Jumbotron>
  );
};

export default BoxItem;
