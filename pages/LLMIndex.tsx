import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

const LLMIndex: React.FC = () => {
  const languageModels = [
    { name: 'GPT-4', model:'gpt-4-32k', tokensPerSecond: 2666.67, contextWindow: 32384 },
    { name: 'ChatGPT', tokensPerSecond: 6000, contextWindow: 4096 },
    { name: 'GPT-3 Turbo', model: 'gpt-3.5-turbo', tokensPerSecond: 23332, contextWindow: 4096 },
    { name: 'GPT-3 Codex', model: 'code-davinci-002', tokensPerSecond: 2664, contextWindow: 8001 },
    {name: 'GPT-J', model: 'eleutherai/gpt-j', tokensPerSecond: 51, contextWindow: 2048 },
    { name: 'Pythia 12B', model: 'pythia-12b', tokensPerSecond: 74, contextWindow: 2048 },
    { name: 'Pythia 20B', model: 'pythia-20b', tokensPerSecond: 4, contextWindow: 2048 },
    { name: 'Pythia 6.9B', model: 'pythia-6.9b', tokensPerSecond: 88, contextWindow: 2048 },
    { name: 'Claude Instant', model: 'claude-instant-v1.0', tokensPerSecond: 100, contextWindow: 2048 },
    { name: 'Claude 1.2', model: 'claude-1.2', tokensPerSecond: 89, contextWindow: 2048 },
    { name: 'Bloomz', model: 'bigscience/bloomz', tokensPerSecond: 26, contextWindow: 2048 },
    { name: 'Flan 2', model: 'flan-ul2', tokensPerSecond: 26, contextWindow: 2048 },
    { name: 'Cohere Command M Nightly', model: 'command-medium-nightly', tokensPerSecond: 26, contextWindow: 2048 },
    { name: 'Cohere Command XL Nightly', model: 'command-xl-nightly', tokensPerSecond: 110, contextWindow: 2048 },
    { name: 'Cohere Command M', model: 'command-m', tokensPerSecond: 167, contextWindow: 2048 },
    { name: 'Cohere Command XL', model: 'command-xl', tokensPerSecond: 114, contextWindow: 2048 },


    { name: 'T5', model: 't5-base', tokensPerSecond: 3445, contextWindow: 512 },

  ];

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
          {languageModels.map((model, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>
                  <Badge bg="primary">{model.name}</Badge>
                </h5>
              </td>
              <td>{model.model}</td>
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
