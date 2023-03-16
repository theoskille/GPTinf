import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type Data = {
  completion: string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { inputValue } = req.body;
    console.log(inputValue);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "rewrite the text below:\n"+`${inputValue}`,
        temperature: 0.87,
        max_tokens: 300,
        top_p: 1,
        frequency_penalty: 1.44,
        presence_penalty: 1.28
    });
    //console.log(response.data.choices[0])
    const completion = response.data.choices?.[0]?.text || '';

    res.status(200).json({ completion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch completion.' });
  }
}