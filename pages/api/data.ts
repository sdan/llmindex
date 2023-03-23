// data api that stores data

import { NextApiRequest, NextApiResponse } from 'next';


function randomNumberBetween(min, max, prevValue, stdDev = 0.2) {
	let randomNumber;
  
	do {
	  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	} while (
	  prevValue !== undefined &&
	  Math.abs(randomNumber - prevValue) <= stdDev
	);
  
	return randomNumber;
  }
  
  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log("handling handler");
  
	const previousRandomNumbers = {};
  
	const newData = Object.entries(data).reduce((acc, [key, value]) => {
	  const randomSeed = value.parameters.randomSeed;
	  const prevValue = previousRandomNumbers[key];
	  const latency = randomNumberBetween(randomSeed[0], randomSeed[1], prevValue, 1);
  
	  previousRandomNumbers[key] = latency;
  
	  return {
		...acc,
		[key]: {
		  ...value,
		  latency,
		},
	  };
	}, {});
  
	res.status(200).json(newData);
  }

const data = {
	"forefront:EleutherAI/GPT-J": {
		"provider": "forefront",
		"version": "vanilla",
		"contextWindow": 2048,
		"name": "gpt-j-6b-vanilla",
		"parameters": {
			"randomSeed": [10,29],
			"temperature": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"frequencyPenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"repetitionPenalty": {
				"value": 1,
				"range": [
					0,
					2
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"forefront:EleutherAI/GPT-NeoX": {
		"provider": "forefront",
		"version": "vanilla",
		"contextWindow": 2048,
		"name": "gpt-neox-20b-vanilla",
		"parameters": {
			"randomSeed": [16,46],
			"temperature": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"frequencyPenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"repetitionPenalty": {
				"value": 1,
				"range": [
					0,
					2
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"forefront:pythia-12b": {
		"provider": "forefront",
		"version": "vanilla",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [50,60],
			"temperature": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"frequencyPenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"repetitionPenalty": {
				"value": 1,
				"range": [
					0,
					2
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "pythia-12b"
	},
	"forefront:pythia-20b": {
		"provider": "forefront",
		"version": "vanilla",
		"name": "pythia-20b",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [44,51],
			"temperature": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"frequencyPenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"repetitionPenalty": {
				"value": 1,
				"range": [
					0,
					2
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"forefront:pythia-6.9b": {
		"provider": "forefront",
		"version": "vanilla",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [31,41],
			"temperature": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1,
				"range": [
					0.1,
					1
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"frequencyPenalty": {
				"value": 0,
				"range": [
					0,
					1
				]
			},
			"repetitionPenalty": {
				"value": 1,
				"range": [
					0,
					2
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "pythia-6.9b"
	},
	"anthropic:claude-instant-v1.0": {
		"provider": "anthropic",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [224,447],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "claude-instant-v1.0"
	},
	"anthropic:claude-v1.2": {
		"provider": "anthropic",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [161,233],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "claude-v1.2"
	},
	"textgeneration:alpaca-7b": {
		"provider": "textgeneration",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [29,31],
			"temperature": {
				"value": 0.7,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"topK": {
				"value": 40,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"repetitionPenalty": {
				"value": 1.1765,
				"range": [
					0.0,
					2.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "alpaca-7b"
	},
	"textgeneration:llama-65b": {
		"provider": "textgeneration",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [18,62],
			"temperature": {
				"value": 0.7,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"topK": {
				"value": 40,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"repetitionPenalty": {
				"value": 1.1765,
				"range": [
					0.0,
					2.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "llama-65b"
	},
	"huggingface:bigscience/bloomz": {
		"provider": "huggingface",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [98,100],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.99,
				"range": [
					0.001,
					0.999
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"repetitionPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "bigscience/bloomz"
	},
	"huggingface:google/flan-t5-xxl": {
		"provider": "huggingface",
		"name": "google/flan-t5-xxl",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [46,85],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.99,
				"range": [
					0.001,
					0.999
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"repetitionPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"huggingface:google/flan-ul2": {
		"provider": "huggingface",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [34,74],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.99,
				"range": [
					0.001,
					0.999
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"repetitionPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "google/flan-ul2"
	},
	"cohere:command-medium-nightly": {
		"provider": "cohere",
		"name": "command-medium-nightly",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [263,466],
			"temperature": {
				"value": 0.9,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.75,
				"range": [
					0,
					1.0
				]
			},
			"topK": {
				"value": 0,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"cohere:command-xlarge-nightly": {
		"provider": "cohere",
		"name": "command-xlarge-nightly",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed":[125,164],
			"temperature": {
				"value": 0.9,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.75,
				"range": [
					0,
					1.0
				]
			},
			"topK": {
				"value": 0,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"cohere:medium": {
		"provider": "cohere",
		"name": "medium",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [210,826],
			"temperature": {
				"value": 0.9,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.75,
				"range": [
					0,
					1.0
				]
			},
			"topK": {
				"value": 0,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"cohere:xlarge": {
		"provider": "cohere",
		"name": "xlarge",
		"contextWindow": 2048,
		"parameters": {
			"randomSeed": [132,209],
			"temperature": {
				"value": 0.9,
				"range": [
					0,
					2.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 0.75,
				"range": [
					0,
					1.0
				]
			},
			"topK": {
				"value": 0,
				"range": [
					0,
					500
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:gpt-4": {
		"provider": "openai",
		"contextWindow": 32384,
		"name": " gpt-4",
		"parameters": {
			"randomSeed": [45,50],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:code-cushman-001": {
		"provider": "openai",
		"contextWindow": 8001,
		"parameters": {
			"randomSeed": [200,368],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "code-cushman-001"
	},
	"openai:code-davinci-002": {
		"provider": "openai",
		"contextWindow": 4097,
		"parameters": {
			"randomSeed": [200,568],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "code-davinci-002"
	},
	"openai:gpt-3.5-turbo": {
		"provider": "openai",
		"contextWindow": 4096,
		"parameters": {
			"randomSeed": [158,268],
			"temperature": {
				"value": 1.0,
				"range": [
					0,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"topK": {
				"value": 1,
				"range": [
					1,
					500
				]
			},
			"presencePenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 1.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		},
		"name": "gpt-3.5-turbo"
	},
	"openai:text-ada-001": {
		"provider": "openai",
		"providers": "openai",
		"contextWindow": 2049,
		"name": "text-ada-001",
		"parameters": {
			"randomSeed": [200,468],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:text-babbage-001": {
		"provider": "openai",
		"name": "text-babbage-001",
		"contextWindow": 2049,
		"parameters": {
			"randomSeed": [300,568],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:text-curie-001": {
		"provider": "openai",
		"name": "text-curie-001",
		"contextWindow": 2049,
		"parameters": {
			"randomSeed": [300,568],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:text-davinci-002": {
		"provider": "openai",
		"name": "text-davinci-002",
		"contextWindow": 4097,
		"parameters": {
			"randomSeed": [58,208],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	},
	"openai:text-davinci-003": {
		"provider": "openai",
		"name": "text-davinci-003",
		"contextWindow": 4097,
		"parameters": {
			"randomSeed": [400,568],
			"temperature": {
				"value": 0.5,
				"range": [
					0.1,
					1.0
				]
			},
			"maximumLength": {
				"value": 200,
				"range": [
					50,
					1024
				]
			},
			"topP": {
				"value": 1.0,
				"range": [
					0.1,
					1.0
				]
			},
			"presencePenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"frequencyPenalty": {
				"value": 0.0,
				"range": [
					0.0,
					1.0
				]
			},
			"stopSequences": {
				"value": [],
				"range": []
			}
		}
	}
}