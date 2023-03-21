import Head from "next/head";
import LLMIndex from "./LLMIndex";
import useModelLatency from './hooks/useModelLatency';

export default function Home() {
  const { latency, isLoading, isError } = useModelLatency();
  if(!isLoading && !isError){
    console.log("frontned latency", latency.latency)
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
        <h1>Latency: {latency.latency}</h1>
        <LLMIndex />
      </>
    );
  }
  
  
  
}
