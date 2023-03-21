import { useState } from 'react';

const PoemGenerator = () => {
  const [generatedText, setGeneratedText] = useState<string>('');

  const handleGeneratePoem = async () => {
    setGeneratedText('');

    const response = await fetch('/api/stream', {
      method: 'POST',
      body: JSON.stringify({
        models: [
          {
            name: 'openai:text-davinci-003',
            parameters: {
              temperature: 0.5,
              maximumLength: 200,
              topP: 1.0,
              presencePenalty: 0.0,
              frequencyPenalty: 0.0,
              stopSequences: [],
            },
            provider: 'openai',
            tag: 'openai:text-davinci-003',
          },
        ],
        prompt: 'Continue the poem: Mary had a little lamb. Its fleece was white as snow.',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.body) {
      console.error('Failed to read response body');
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    while (true) {
      console.log("poem still alive")
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      console.log("poem chunk",chunk)
      const matches = chunk.match(/event:(\S+)\sdata:(.+?)\s/);
      console.log("poem chunk end")

      if (matches) {
        console.log("poem match)")
        const data = JSON.parse(matches[2]);
        data.event = matches[1];
        console.log("poem vnt",data.event);

        if (data.event === 'status') {
          setGeneratedText((prevText) => prevText + data.message);
        }
      } else {
        console.log("poem doesnt match")
      }
    }
  };

  return (
    <div>
      <h1>Poem Generator</h1>
      <button onClick={handleGeneratePoem}>Generate Poem</button>
      {generatedText && (
        <div>
          <h2>Generated Poem:</h2>
          <p>{generatedText}</p>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;
