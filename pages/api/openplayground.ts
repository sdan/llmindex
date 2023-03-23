// import { useState, useEffect } from 'react';

// interface ModelParameter {
//   value: string;
// }

// interface Model {
//   provider: string;
//   name: string;
//   version: string;
//   parameters: Record<string, ModelParameter>;
//   tag: string;
// }

// interface GenerationResponse {
//   event: string;
//   data: unknown;
// }

// interface GenerateOptions {
//   [key: string]: unknown;
// }

// interface NatClient {
//   models: Record<string, Model>;
//   generate: (model: Model | string, prompt: string, options?: GenerateOptions) => Promise<AsyncIterable<GenerationResponse>>;
// }

// const useNatClient = (token: string): NatClient | undefined => {
//   const [natClient, setNatClient] = useState<NatClient | undefined>(undefined);

//   useEffect(() => {
//     const fetchModels = async (url: string, token: string) => {
//       const res = await fetch(`${url}/all_models`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error('Failed to fetch models');
//       }

//       const data = await res.json();

//       const models: Record<string, Model> = {};
//       Object.entries(data).forEach(([key, value]) => {
//         models[key] = {
//           provider: value.provider,
//           name: value.name,
//           version: value.version,
//           parameters: value.parameters,
//           tag: `${value.provider.trim()}:${value.name.trim()}`,
//         };
//       });

//       return models;
//     };

//     const fetcher = async (url: string, token: string) => {
//       const models = await fetchModels(url, token);

//       return {
//         models,
//         generate: async (model: Model | string, prompt: string, options: GenerateOptions = {}) => {
//           if (typeof model === "string" && model in models) {
//             model = models[model];
//           }

//           const payload = {
//             models: [
//               {
//                 name: model.tag,
//                 parameters: model.parameters,
//                 provider: model.provider,
//                 tag: model.tag,
//               },
//             ],
//             prompt,
//             ...options,
//           };

//           const res = await fetch(`${url}/stream`, {
//             method: 'POST',
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//           });

//           if (!res.ok) {
//             throw new Error('Failed to generate text');
//           }

//           const reader = res.body?.getReader();

//           return {
//             async *[Symbol.asyncIterator]() {
//               let result: { done: boolean; value?: Uint8Array };

//               do {
//                 result = await reader?.read();

//                 if (result?.value) {
//                   const chunk = new TextDecoder('utf-8').decode(result.value);
//                   const matches = chunk.match(/event:(\S+)\sdata:(.+)\s/);

//                   if (matches) {
//                     const data = JSON.parse(matches[2]);
//                     data.event = matches[1];

//                     yield data as GenerationResponse;
//                   }
//                 }
//               } while (!result?.done);
//             },
//           };
//         },
//       };
//     };

//     fetcher('https://nat.dev/api', token).then((data) => {
//       setNatClient(data);
//     }).catch((err) => {
//       console.error(err);
//     });
//   }, [token]);

//   return natClient;
// };

// export default useNatClient;
