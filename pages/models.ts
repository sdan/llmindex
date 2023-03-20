export interface LanguageModel {
    name: string;
    description: string;
    latency: string;
    tokensPerSecond: number;
    contextWindow: number;
    otherMetrics: string[];
  }
  
  export const languageModels: LanguageModel[] = [
    {
      name: 'GPT-3',
      description: 'Generative Pre-trained Transformer 3',
      latency: '100ms',
      tokensPerSecond: 40000,
      contextWindow: 2048,
      otherMetrics: ['Accuracy: 89%', 'Cost: $$$'],
    },
    // ... add other language models
  ];
  