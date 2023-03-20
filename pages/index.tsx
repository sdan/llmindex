// pages/index.tsx
import Head from 'next/head';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const models = [
  {
    name: 'GPT-3',
    latency: '100ms',
    tokensPerSecond: '10,000',
    contextWindow: '2048 tokens',
  },
  {
    name: 'GPT-3 Turbo',
    latency: '50ms',
    tokensPerSecond: '20,000',
    contextWindow: '4096 tokens',
  },
  // Add other models and their metrics here
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LLMIndex</title>
        <meta
          name="description"
          content="A site listing popular large language models and their metrics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="text-center my-5">Large Language Models Index</h1>
        <Row>
          {models.map((model, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{model.name}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Latency: <strong>{model.latency}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Tokens per second: <strong>{model.tokensPerSecond}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Context window: <strong>{model.contextWindow}</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
