import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import theme from "./utils/theme";
import data from "./data/data";
import Navigation from "./components/Navigation";
import Teaching from "./pages/Teaching";
import Training from "./pages/Training";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 10px 10px 10px;
`;

const App = () => {
  const [batch, setBatch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setBatch(data);
      setLoading(true);
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Container>
            <Navigation />
            <Switch>
              <Route
                path="/"
                render={(props) =>
                  loading && batch.length !== 0 ? (
                    <Teaching {...props} batch={batch} />
                  ) : null
                }
                exact
              ></Route>
              <Route
                path="/training"
                render={(props) =>
                  loading && batch.length !== 0 ? (
                    <Training {...props} batch={batch} />
                  ) : null
                }
              ></Route>
            </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
