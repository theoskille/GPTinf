import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  synonyms: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const word = req.query.word as string;

  if (!word) {
    return res.status(400).json({ message: 'Missing "word" parameter.' });
  }

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${encodeURIComponent(word)}`, {
      headers: {
        'X-Api-Key': process.env.THESAURUS_API_KEY, // Replace with your API key
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch synonyms for "${word}".`);
    }

    const data = await response.json();
    const synonyms = data.synonyms || [];

    res.status(200).json({ synonyms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch synonyms.' });
  }
}