import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

const LLMIndex: React.FC = () => {
  const languageModels = [
    { name: 'GPT-3', latency: 45, tokensPerSecond: 1000, contextWindow: 4096 },
    { name: 'GPT-3 Turbo', latency: 25, tokensPerSecond: 2000, contextWindow: 4096 },
    { name: 'GPT-4', latency: 20, tokensPerSecond: 3000, contextWindow: 8192 },
    { name: 'T5', latency: 35, tokensPerSecond: 1500, contextWindow: 2048 },
    { name: 'BERT', latency: 40, tokensPerSecond: 1200, contextWindow: 512 },
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">LLM Index</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Model Name</th>
            <th>Latency (ms)</th>
            <th>Tokens per Second</th>
            <th>Context Window</th>
          </tr>
        </thead>
        <tbody>
          {languageModels.map((model, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>
                  <Badge bg="primary">{model.name}</Badge>
                </h5>
              </td>
              <td>{model.latency}</td>
              <td>{model.tokensPerSecond}</td>
              <td>{model.contextWindow}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LLMIndex;
