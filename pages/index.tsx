import Head from "next/head";
// import LLMIndex from "./LLMIndex";
import React, { useState, useEffect } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import useSWR from "swr";

interface Model {
  provider: string;
  name: string;
  version: string;
  parameters: Record<string, unknown>;
  tag: string;
  latency: number;
  contextWindow: number;
}

export default function Home() {
  const [modelsArray, setModelsArray] = useState<Model[]>([]);
  const [previousRandomNumbers, setPreviousRandomNumbers] = useState({});
  const [sortColumn, setSortColumn] = useState("index");
  const [sortOrder, setSortOrder] = useState("asc");

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
          ...(value as object),
        } as Model;
      });
      console.log("newModelsArray", newModelsArray);
      setModelsArray(newModelsArray);
    }
  }, [natModels]);

  const handleSort = (column) => {
    console.log("column", column);
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedModels = [...modelsArray].sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (columnA < columnB) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (columnA > columnB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

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
              <th onClick={() => handleSort("latency")}>Speed (chars/sec)</th>
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
                <td className="status-cell align-middle">
                  <span className="status-symbol"></span>
                </td>
                <td>{model.contextWindow}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <style jsx>{`
        .status-cell {
          text-align: center;
          background-color: transparent;
        }
        
        .status-symbol {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: green;
          animation: breathing 3s ease-in-out infinite;
        }
        

        @keyframes breathing {
          0% {
            box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(50, 205, 50, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.4);
          }
        }
      `}</style>
    </>
  );
}
