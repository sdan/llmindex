import React, { useState, useEffect } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import useSWR from "swr";
import PoemGenerator from "./components/PoemGenerator";

const LLMIndex: React.FC = () => {
    const [modelsArray, setModelsArray] = useState([]);


  const fetcher = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  const { data: natModels, error } = useSWR("/api/data", fetcher, {
    refreshInterval: 1000,
  });

  function randomNumberBetween(min, max, prevValue, stdDev = 1) {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    } while (
      prevValue !== undefined &&
      Math.abs(randomNumber - prevValue) <= stdDev
    );

    return randomNumber;
  }

  const previousRandomNumbers = {};

  useEffect(() => {
    if (natModels) {
      const newModelsArray = Object.entries(natModels).map(([key, value]) => {
        const randomSeed = value.parameters.randomSeed;
        const prevValue = previousRandomNumbers[key];
        const latency = randomNumberBetween(
          randomSeed[0],
          randomSeed[1],
          prevValue,
          1
        );
        previousRandomNumbers[key] = latency;
        return {
          tag: key,
          latency,
          ...value,
        };
      });
      setModelsArray(newModelsArray);
    }
  }, [natModels]);

//   const filteredData = modelsArray.map(({ name, version, provider }) => ({
//     name,
//     version,
//     provider,
//   }));

  return (
    <Container className="my-5">
      <h1 className="mb-4">LLM Index</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Model Name</th>
            <th>Code Name</th>
            <th>Latency (ms)</th>
            <th>Characters per Second</th>
            <th>Context Window</th>
          </tr>
        </thead>
        <tbody>
          {/* <PoemGenerator /> */}
          {modelsArray.map((model, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>
                  <Badge bg="primary">{model.name}</Badge>
                </h5>
              </td>
              <td>{model.tag}</td>
              <td>{model.latency}</td>
              <td>{model.provider}</td>

              <td>{model.provider}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LLMIndex;
