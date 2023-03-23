import Head from "next/head";
import LLMIndex from "./LLMIndex";
import React, { useState, useEffect } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import useSWR from "swr";


export default function Home() {
  const [modelsArray, setModelsArray] = useState([]);
  const [previousRandomNumbers, setPreviousRandomNumbers] = useState({});


  const fetcher = async (url: string) => {
    console.log("fetching");
    const res = await fetch(url);
    const data = await res.json();
  
    const newData = Object.entries(data).reduce((acc, [key, value]) => {
      const randomSeed = value.parameters.randomSeed;
      const prevValue = previousRandomNumbers[key];
      const latency = randomNumberBetween(randomSeed[0], randomSeed[1], prevValue, 1);
  
      setPreviousRandomNumbers((prevState) => ({
        ...prevState,
        [key]: latency,
      }));
  
      return {
        ...acc,
        [key]: {
          ...value,
          latency,
        },
      };
    }, {});
  
    return newData;
  };

  const { data: natModels, error, mutate } = useSWR("/api/data", fetcher, {
    refreshInterval: 2000,
  });
  console.log("data has updated",natModels)

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

  useEffect(() => {
    console.log("effect")
    if (natModels) {
      console.log("natModels", natModels)
      const newModelsArray = Object.entries(natModels).map(([key, value]) => {
        const randomSeed = value.parameters.randomSeed;
        const prevValue = previousRandomNumbers[key];
        const latency = randomNumberBetween(
          randomSeed[0],
          randomSeed[1],
          prevValue,
          1
        );
        setPreviousRandomNumbers((prevState) => ({
          ...prevState,
          [key]: latency,
        }));
        return {
          tag: key,
          latency,
          ...value,
        };
      });
      console.log("newModelsArray", newModelsArray)
      setModelsArray(newModelsArray);
    }
  }, [natModels]);

    return (
      <>
        <Head>
          <title>LLM Index</title>
          <meta
            name="description"
            content="A list of popular language models and their metrics"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
      </>
    );
  }