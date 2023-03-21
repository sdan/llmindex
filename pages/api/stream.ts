import type { NextApiRequest, NextApiResponse } from 'next';
// import fetch from 'node-fetch';

export default async function stream(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Imluc18yTWtjQlhndjhpbEwxcGNDTnB3MXV5anF0azgiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2FjY291bnRzLm5hdC5kZXYiLCJleHAiOjE2NzkzNDYzODgsImlhdCI6MTY3OTM0NjMyOCwiaXNzIjoiaHR0cHM6Ly9jbGVyay5uYXQuZGV2IiwianRpIjoiYTg5NmJlYzM1NzMxM2M5YjRlNGMiLCJuYmYiOjE2NzkzNDYzMTgsInNpZCI6InNlc3NfMk5JS29BT0tUU1FjT25Cdms1SHR0SmdYZjMwIiwic3ViIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2VtYWlsIjoibGxtMkBzZGFuLmNjIiwidXNlcl9maXJzdF9uYW1lIjpudWxsLCJ1c2VyX2lkIjoidXNlcl8yTklLbFg2bEtlRXhra2xGakI2VzdIRXVjTlkiLCJ1c2VyX2xhc3RfbmFtZSI6bnVsbH0.kNOdsztBiVOMNfb_AlqKJ7hRlxLItnQQbxFE-91SVWaDWJ7TlVTIPtVUmMKQioWzp15uUTbD937pdfwobY87oyQ6HAz_a1ls2lQOqxx8ijjGAPVWqmKYw3uDlIAjY08useNeUclk8D1xB6ae3rDwU4sp93uSkCG8E6pDjM8aVAOCzBfEXM6bEVgC54qgZgCtcn12_LsOWM8wcSdlR8VTBT4XDghDrTPZz_-8fVe0_SoAEn_cdmVYz8sGDF3pLIkT6nUr0cbZAqyZgnwIYjCJOmU_l1MA3_aimct5yYRVq7VTQ2DaiPL2dAwYkM5HJNiE7r1yCvxSbF2JANY_Nyx7rg";

  const response = await fetch(`https://nat.dev/api/stream`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    res.status(response.status).json({ error: 'Failed to generate text' });
    return;
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const reader = response.body?.getReader();

  if (!reader) {
    res.status(500).json({ error: 'Failed to read response body' });
    return;
  }

  const sendEvent = (event: string, data: any) => {
    if (event === "infer" || event === "status") {
        console.log("status msg",data.message)
        console.log("status event",event)
      res.write(`event: ${event}\n`);
      res.write(`data: ${JSON.stringify(data.message)}\n\n`);
    }
  };
  
  try {
    while (true) {
        console.log("still alive")
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
  
      const chunk = new TextDecoder('utf-8').decode(value);
      const matches = chunk.match(/event:(\S+)\sdata:(.+)\s/);
  
      if (matches) {
        const data = JSON.parse(matches[2]);
        const event = matches[1];
  
        if (event === "infer" && data.message) {
            console.log("infer msg",data.message)
          sendEvent("status", data);
        }
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    res.end();
  }
  
}


