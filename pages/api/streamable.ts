import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  runtime: "edge",
};

export default async function stream(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = "POST";
  const bodyContent = JSON.stringify({
    models: [
      {
        name: "openai:text-davinci-003",
        parameters: {
          temperature: 0.5,
          maximumLength: 200,
          topP: 1.0,
          presencePenalty: 0.0,
          frequencyPenalty: 0.0,
          stopSequences: [],
        },
        provider: "openai",
        tag: "openai:text-davinci-003",
      },
    ],
    prompt:
      "Continue the poem: Mary had a little lamb. Its fleece was white as snow.",
  });

  const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6Imluc18yTWtjQlhndjhpbEwxcGNDTnB3MXV5anF0azgiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2FjY291bnRzLm5hdC5kZXYiLCJleHAiOjE2NzkzNDYzODgsImlhdCI6MTY3OTM0NjMyOCwiaXNzIjoiaHR0cHM6Ly9jbGVyay5uYXQuZGV2IiwianRpIjoiYTg5NmJlYzM1NzMxM2M5YjRlNGMiLCJuYmYiOjE2NzkzNDYzMTgsInNpZCI6InNlc3NfMk5JS29BT0tUU1FjT25Cdms1SHR0SmdYZjMwIiwic3ViIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2VtYWlsIjoibGxtMkBzZGFuLmNjIiwidXNlcl9maXJzdF9uYW1lIjpudWxsLCJ1c2VyX2lkIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2xhc3RfbmFtZSI6bnVsbH0.kNOdsztBiVOMNfb_AlqKJ7hRlxLItnQQbxFE-91SVWaDWJ7TlVTIPtVUmMKQioWzp15uUTbD937pdfwobY87oyQ6HAz_a1ls2lQOqxx8ijjGAPVWqmKYw3uDlIAjY08useNeUclk8D1xB6ae3rDwU4sp93uSkCG8E6pDjM8aVAOCzBfEXM6bEVgC54qgZgCtcn12_LsOWM8wcSdlR8VTBT4XDghDrTPZz_-8fVe0_SoAEn_cdmVYz8sGDF3pLIkT6nUr0cbZAqyZgnwIYjCJOmU_l1MA3_aimct5yYRVq7VTQ2DaiPL2dAwYkM5HJNiE7r1yCvxSbF2JANY_Nyx7rg";


  const response = await fetch(`https://nat.dev/api/stream`, {
    method,
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("response from", response)

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
          let counter = 0;

      function onParse(event) {
        console.log("onParse", event);
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].text;
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);

      const reader = response.body?.getReader();
      if (!reader) {
        res.status(500).json({ error: "Failed to read response body" });
        return;
      }

      async function* readChunks(reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }

          const chunk = new TextDecoder("utf-8").decode(value);
          yield chunk;
        }
      }

      for await (const chunk of readChunks(reader)) {
        parser.feed(chunk);
      }
    },
  });

return stream;

}

function createParser(onParse) {
  let buffer = "";

  return {
    feed(chunk) {
      buffer += chunk;
      let pos = 0;
      let match;

      const regex = /event:(\S+)\sdata:(.+)\s/g;

      while ((match = regex.exec(buffer))) {
        const event = match[1];
        const data = match[2];

        onParse({ type: "event", data });

        pos = regex.lastIndex;
      }

      buffer = buffer.slice(pos);
    },
  };
}
