import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import SquigglyLines from "./components/SquigglyLines";

// import { Testimonials } from "../components/Testimonials";

const models = [
  {
    name: "GPT-3",
    description: "A state-of-the-art language model developed by OpenAI.",
    image: "/gpt3.jpg",
    link: "https://openai.com/blog/gpt-3-apps/",
  },
  {
    name: "BERT",
    description:
      "A powerful language model developed by Google that can handle a wide range of NLP tasks.",
    image: "/bert.jpg",
    link: "https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html",
  },
  {
    name: "XLNet",
    description:
      "A language model that achieves state-of-the-art results on many NLP tasks by modeling dependencies between all permutations of the input sequence.",
    image: "/xlnet.jpg",
    link: "https://arxiv.org/abs/1906.08237",
  },
  {
    name: "T5",
    description:
      "A versatile language model that can be fine-tuned for a wide range of tasks, including summarization, translation, and question answering.",
    image: "/t5.jpg",
    link: "https://ai.googleblog.com/2020/02/exploring-transfer-learning-with-t5.html",
  },
];


const Models: NextPage = () => {
    
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
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Head>
          <title>Popular Language Models</title>
        </Head>
  

        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-900 sm:text-7xl">
            LLM Index{" "}
            <span className="relative whitespace-nowrap text-blue-600">
            {/* <SquigglyLines /> */}
            </span>
          </h1>
          <div className="mt-8">
            <div className="hidden sm:flex rounded-t-lg overflow-hidden border-t border-l border-r border-black">
              <div className="w-1/3 p-4 font-bold text-gray-900">Model</div>
              <div className="w-2/3 p-4 font-bold text-gray-900">Code Name</div>
              <div className="w-2/3 p-4 font-bold text-gray-900">Latency (ms)</div>
              <div className="w-2/3 p-4 font-bold text-gray-900">Characters per Second</div>
              <div className="w-2/3 p-4 font-bold text-gray-900">Context Window</div>

            </div>
            {languageModels.map((model) => (
              <div
                key={model.name}
                className="flex flex-col sm:flex-row border-l border-r border-black"
              >
                <div className="sm:w-1/3 sm:border-t sm:border-l sm:border-b p-4">

                    <a target="_blank" rel="noopener noreferrer" className="legacyBehavior">
                      <div className="text-gray-900 font-bold hover:text-blue-600 transition duration-300 ease-in-out">
                        {model.name}
                      </div>
                    </a>
                    

                </div>
                <div className="sm:w-2/3 sm:border-t sm:border-r sm:border-b p-4">


                      <p className="text-gray-500 text-sm">{model.model}</p>


          </div>
          <div className="sm:w-2/3 sm:border-t sm:border-r sm:border-b p-4">


                      <p className="text-gray-500 text-sm">{model.tokensPerSecond}</p>




          </div>
          <div className="sm:w-2/3 sm:border-t sm:border-r sm:border-b p-4">


                      <p className="text-gray-500 text-sm">{model.contextWindow}</p>




          </div>
        </div>
      ))}
    </div>
  </main>

</div>
);
};

    
    

export default Models;
