import { useState } from 'react';

const PoemGenerator = () => {
  const [generatedText, setGeneratedText] = useState<string>('');

  const handleGeneratePoem = async () => {
    setGeneratedText('');

    const source = new EventSource('/api/stream');
    console.log("new source",source)

    source.onmessage = (event) => {
      console.log('received event:', event);
  
      if (event.data) {
        setGeneratedText((prevText) => prevText + event.data);
      }
    };
  
    source.onerror = (error) => {
      console.error('EventSource error:', error);
      source.close();
    };
  };

  return (
    <div>
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
