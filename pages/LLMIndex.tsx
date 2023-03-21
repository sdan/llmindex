import React from "react";
import { useState , useEffect} from 'react';
import { Container, Table, Badge } from "react-bootstrap";
import useNatClient from "./api/openplayground";
import useSWR, { SWRConfiguration } from 'swr';
import StreamComponent from './components/PoemGenerator';
import { EventSourcePolyfill } from 'event-source-polyfill';
import PoemGenerator from './components/PoemGenerator';

const fetcher = (url) => fetch(url).then((res) => res.json());


const LLMIndex: React.FC = () => {
    
  const [generatedText, setGeneratedText] = React.useState("");

  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Imluc18yTWtjQlhndjhpbEwxcGNDTnB3MXV5anF0azgiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2FjY291bnRzLm5hdC5kZXYiLCJleHAiOjE2NzkzNDYzODgsImlhdCI6MTY3OTM0NjMyOCwiaXNzIjoiaHR0cHM6Ly9jbGVyay5uYXQuZGV2IiwianRpIjoiYTg5NmJlYzM1NzMxM2M5YjRlNGMiLCJuYmYiOjE2NzkzNDYzMTgsInNpZCI6InNlc3NfMk5JS29BT0tUU1FjT25Cdms1SHR0SmdYZjMwIiwic3ViIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2VtYWlsIjoibGxtMkBzZGFuLmNjIiwidXNlcl9maXJzdF9uYW1lIjpudWxsLCJ1c2VyX2lkIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2xhc3RfbmFtZSI6bnVsbH0.kNOdsztBiVOMNfb_AlqKJ7hRlxLItnQQbxFE-91SVWaDWJ7TlVTIPtVUmMKQioWzp15uUTbD937pdfwobY87oyQ6HAz_a1ls2lQOqxx8ijjGAPVWqmKYw3uDlIAjY08useNeUclk8D1xB6ae3rDwU4sp93uSkCG8E6pDjM8aVAOCzBfEXM6bEVgC54qgZgCtcn12_LsOWM8wcSdlR8VTBT4XDghDrTPZz_-8fVe0_SoAEn_cdmVYz8sGDF3pLIkT6nUr0cbZAqyZgnwIYjCJOmU_l1MA3_aimct5yYRVq7VTQ2DaiPL2dAwYkM5HJNiE7r1yCvxSbF2JANY_Nyx7rg";
  const natClient = useNatClient(token);
  console.log("natClient", natClient)

  const handleClick = async () => {

    let payload = {'models': [{'name': 'openai:text-davinci-003', 'parameters': {'temperature': 0.5, 'maximumLength': 200, 'topP': 1.0, 'presencePenalty': 0.0, 'frequencyPenalty': 0.0, 'stopSequences': []}, 'provider': 'openai', 'tag': 'openai:text-davinci-003'}], 'prompt': 'Continue the poem: Mary had a little lamb. Its fleece was white as snow.'}

    const res = await fetch('/api/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("res data", data);
        setGeneratedText(data);
      }    

  };

  const languageModels = [
    {
      name: "GPT-4",
      model: "gpt-4-32k",
      tokensPerSecond: 2666.67,
      contextWindow: 32384,
    },
    { name: "ChatGPT", tokensPerSecond: 6000, contextWindow: 4096 },
    {
      name: "GPT-3 Turbo",
      model: "gpt-3.5-turbo",
      tokensPerSecond: 23332,
      contextWindow: 4096,
    },
    {
      name: "GPT-3 Codex",
      model: "code-davinci-002",
      tokensPerSecond: 2664,
      contextWindow: 8001,
    },
    {
      name: "GPT-J",
      model: "eleutherai/gpt-j",
      tokensPerSecond: 51,
      contextWindow: 2048,
    },
    {
      name: "Pythia 12B",
      model: "pythia-12b",
      tokensPerSecond: 74,
      contextWindow: 2048,
    },
    {
      name: "Pythia 20B",
      model: "pythia-20b",
      tokensPerSecond: 4,
      contextWindow: 2048,
    },
    {
      name: "Pythia 6.9B",
      model: "pythia-6.9b",
      tokensPerSecond: 88,
      contextWindow: 2048,
    },
    {
      name: "Claude Instant",
      model: "claude-instant-v1.0",
      tokensPerSecond: 100,
      contextWindow: 2048,
    },
    {
      name: "Claude 1.2",
      model: "claude-1.2",
      tokensPerSecond: 89,
      contextWindow: 2048,
    },
    {
      name: "Bloomz",
      model: "bigscience/bloomz",
      tokensPerSecond: 26,
      contextWindow: 2048,
    },
    {
      name: "Flan 2",
      model: "flan-ul2",
      tokensPerSecond: 26,
      contextWindow: 2048,
    },
    {
      name: "Cohere Command M Nightly",
      model: "command-medium-nightly",
      tokensPerSecond: 26,
      contextWindow: 2048,
    },
    {
      name: "Cohere Command XL Nightly",
      model: "command-xl-nightly",
      tokensPerSecond: 110,
      contextWindow: 2048,
    },
    {
      name: "Cohere Command M",
      model: "command-m",
      tokensPerSecond: 167,
      contextWindow: 2048,
    },
    {
      name: "Cohere Command XL",
      model: "command-xl",
      tokensPerSecond: 114,
      contextWindow: 2048,
    },

    { name: "T5", model: "t5-base", tokensPerSecond: 3445, contextWindow: 512 },
  ];

  if (!natClient) {
    return <div>Loading...</div>;
    }

    const natModels = Object.values(natClient.models);

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
        {/* <button onClick={handleClick}>Generate Text</button>
        <p>Text: {generatedText}</p>
<PoemGenerator /> */}
          {natModels.map((model, index) => (
            
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>
                  <Badge bg="primary">{model.name}</Badge>
                </h5>
              </td>
              <td>{model.tag}</td>
              <td>{model.provider}</td>
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
