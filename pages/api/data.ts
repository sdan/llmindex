// data api that stores data

import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // return hello world
	console.log("handling handler")
    res.status(200).json(data);
}

const data = {
	"forefront:EleutherAI/GPT-J": {
		"provider": "forefront",
		"version": "vanilla",
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