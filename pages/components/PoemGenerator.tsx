import { useState } from 'react';

const PoemGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");


  // const generateBio = async (e: any) => {
  //   e.preventDefault();
  //   setGeneratedText("");
  //   setLoading(true);
  //   const response = await fetch("/api/streamable", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       prompt,
  //     }),
  //   });

  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }

  //   const data = response.body;
  //   if (!data) {
  //     return;
  //   }
  //   const reader = data.getReader();
  //   const decoder = new TextDecoder();
  //   let done = false;

  //   while (!done) {
  //     const { value, done: doneReading } = await reader.read();
  //     done = doneReading;
  //     const chunkValue = decoder.decode(value);
  //     console.log("poem chunk",chunkValue);
  //     setGeneratedText((prev) => prev + chunkValue);
  //   }

  //   setLoading(false);
  // };


  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/streamable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("RESPONSE NOT OK", response);
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }

    setLoading(false);
  };




  return (
    <div>
      <button onClick={generateBio}>Generate Poem</button>
      {generatedBios && (
        <div>
          <h2>Generated Poem:</h2>
          <p>{generatedBios}</p>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;
