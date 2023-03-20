import Head from "next/head";
import LLMIndex from "./LLMIndex";

export default function Home() {
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
      <LLMIndex />
    </>
  );
}
