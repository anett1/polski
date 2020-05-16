import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import theme from "./utils/theme";
import data from "./data/data";
import Table from "./components/Table";
import * as ReactBootstrap from "react-bootstrap";
import { IoIosHeart } from "react-icons/io";

const Container = styled.div`
  max-width: 1024px;
  margin: 20px auto 0 auto;
  padding: 10px;
`;

const App = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setWords(data);
    setLoading(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Container>
            <p style={{ textAlign: "right" }}>
              FOR YOU{" "}
              <span style={{ color: "red" }}>
                <IoIosHeart />
              </span>
            </p>
            {loading ? <Table words={words} /> : <ReactBootstrap.Spinner />}
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
