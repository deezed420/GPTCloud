import type { NextApiRequest, NextApiResponse } from "next";

async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse
)
{const request = new XMLHttpRequest();
request.open('POST', 'https://gptcloud.enderdabender.repl.co/v1/chat/completions', true);
request.setRequestHeader('Authorization', 'Bearer pk-yvKRjKhttFJPgeeysUsfIJCKfgpXgUFTuFXqaHbssudOdeHC');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.send(JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant named GPTCloud based on OpenAI ChatGPT"},
    ].concat(req.body.messages)
}));}

export default chatHandler;