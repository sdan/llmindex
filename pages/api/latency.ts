// Make a serverless function that returns random latency data based on the model name:
//
import type { NextApiRequest, NextApiResponse } from "next";

// Function to generate random latency data
function getRandomLatency() {
  console.log("getting random latency")
  const latencyData = {
    "modelA": [100, 200, 300],
    "modelB": [400, 500, 600],
    "modelC": [700, 800, 900],
  };

    const randomIndex = Math.floor(Math.random() * latencyData["modelA"].length);
    console.log("randomIndex", randomIndex)
    return latencyData["modelA"][randomIndex];

  // Return a default value if the model name is not found
  return 1000;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // let { modelName } = req.query;
  // modelName = "modelA"
  console.log("handling handler")

  const latency = getRandomLatency();
  console.log("latency resp", latency)

  res.status(200).json({ latency });
}
