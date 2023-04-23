// Make sure to add OPENAI_API_KEY as a secret

import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,} from "openai";
import type { NextApiRequest, NextApiResponse } from "next";


const configuration = new Configuration({
  apiKey: "pk-yvKRjKhttFJPgeeysUsfIJCKfgpXgUFTuFXqaHbssudOdeHC",
	basePath: "https://gptcloud.enderdabender.repl.co/v1",
});

const openai = new OpenAIApi(configuration);

async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: "You are a helpful assistant named GPTCloud.",
      },
      
    ].concat(req.body.messages),
    temperature: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].message });
}

export default chatHandler;
