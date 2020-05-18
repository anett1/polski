import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import theme from "./utils/theme";
import data from "./data/data";
import Table from "./components/Table";
import * as ReactBootstrap from "react-bootstrap";
import { IoIosHeart } from "react-icons/io";
import StyledButton from "./components/Button";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  max-width: 1024px;
  margin: 20px auto 0 auto;
  padding: 10px;
`;

const App = () => {
  const [batch, setBatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chandleBatch, setChandleBatch] = useState("words");

  useEffect(() => {
    {
      chandleBatch === "words"
        ? setBatch(data[0].words)
        : setBatch(data[0].sentences);
    }

    setLoading(true);
  }, [chandleBatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Container>
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <StyledButton
                  onClick={() => {
                    setChandleBatch("words");
                  }}
                  variant="regular"
                >
                  words
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    setChandleBatch("sentences");
                  }}
                  variant="regular"
                >
                  sentences
                </StyledButton>
              </div>
              <p style={{ textAlign: "right" }}>
                FOR YOU
                <span style={{ color: "red" }}>
                  <IoIosHeart />
                </span>
              </p>
            </header>

            {loading ? <Table words={batch} /> : <ReactBootstrap.Spinner />}
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
