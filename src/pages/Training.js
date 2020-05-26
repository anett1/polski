import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import * as ReactBootstrap from "react-bootstrap";
import BoxItem from "../components/BoxItem";
import StyledButton from "../components/Button";
import theme from "../utils/theme";

const Training = ({ batch }) => {
  const [amountTraining, setAmountTraining] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedBatchLength, setSelectedBatchLength] = useState(null);
  const [randomBatch, setRandomBatch] = useState([]);

  const handleAmountTraining = (e) => {
    setLoading(false);
    setAmountTraining(e.target.value);
  };

  const pushToRandomBatch = (selectedBatch) => {
    setSelectedBatchLength(selectedBatch.length);
    const pushBatch = [];
    const banchForRandom = [...selectedBatch];

    for (let i = 0; i < amountTraining; i++) {
      const index = Math.floor(Math.random() * banchForRandom.length);
      pushBatch.push(banchForRandom[index]);
      banchForRandom.splice(index, 1);
    }

    setLoading(true);
    return pushBatch;
  };

  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            Number of training:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="number" onChange={handleAmountTraining} />
      </InputGroup>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: theme.interspace.standard,
        }}
      >
        <StyledButton
          onClick={() => {
            setRandomBatch(pushToRandomBatch(batch[0].words));
          }}
          variant="regular"
          width="49%"
          size="sm"
        >
          random words
        </StyledButton>

        <StyledButton
          onClick={() => {
            setRandomBatch(pushToRandomBatch(batch[0].sentences));
          }}
          variant="regular"
          width="49%"
          size="sm"
        >
          random sentences
        </StyledButton>
      </div>

      {loading ? (
        selectedBatchLength >= amountTraining ? (
          <>
            {randomBatch.map((batchItem) => (
              <BoxItem key={batchItem.id} batchItem={batchItem} />
            ))}
          </>
        ) : (
          <>
            <p>There are {selectedBatchLength} tasks in the database</p>
          </>
        )
      ) : (
        <ReactBootstrap.Spinner />
      )}
    </>
  );
};

export default Training;
