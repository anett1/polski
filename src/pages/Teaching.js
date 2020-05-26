import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import * as ReactBootstrap from "react-bootstrap";
import theme from "../utils/theme";
import StyledButton from "../components/Button";

const Teaching = ({ batch }) => {
  const [selectedBatch, setSelectedBatch] = useState([]);
  const [chandleBatch, setChandleBatch] = useState("words");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (chandleBatch === "words") {
        setSelectedBatch(batch[0].words);
      } else if (chandleBatch === "sentences") {
        setSelectedBatch(batch[0].sentences);
      }
      setLoading(true);
    }
    return () => {
      mounted = false;
    };
  }, [chandleBatch]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: theme.interspace.standard,
        }}
      >
        <StyledButton
          onClick={() => {
            setChandleBatch("words");
          }}
          variant="regular"
          width="49%"
          size="sm"
        >
          words
        </StyledButton>
        <StyledButton
          onClick={() => {
            setChandleBatch("sentences");
          }}
          variant="regular"
          width="49%"
          size="sm"
        >
          sentences
        </StyledButton>
      </div>

      {loading ? <Table batch={selectedBatch} /> : <ReactBootstrap.Spinner />}
    </>
  );
};

export default Teaching;
