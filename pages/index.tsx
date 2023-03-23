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

    return data;
  };

  const {
    data: natModels,
    error,
    mutate,
  } = useSWR("/api/data", fetcher, {
    refreshInterval: 2000,
  });
  console.log("data has updated", natModels);

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
    console.log("effect");
    if (natModels) {
      console.log("natModels", natModels);
      const newModelsArray = Object.entries(natModels).map(([key, value]) => {
        return {
          tag: key,
          ...value,
        };
      });
      console.log("newModelsArray", newModelsArray);
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
              <th>Provider</th>
              <th>Model Name</th>
              <th>Code Name</th>
              <th>Speed (chars/sec)</th>
              <th>Status</th>
              <th>Context Window</th>
            </tr>
          </thead>
          <tbody>
            {modelsArray.map((model, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{model.provider}</td>
                <td>
                  <h5>
                    <Badge bg="primary">{model.name}</Badge>
                  </h5>
                </td>
                <td>{model.tag}</td>
                <td>{model.latency}</td>
                <span class="badge badge-pill badge-success">Success</span>                <td>{model.contextWindow}</td>
                {/* <span className="green-dot"></span> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
