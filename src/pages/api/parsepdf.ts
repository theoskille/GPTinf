import type { NextApiRequest, NextApiResponse } from 'next';
const pdfParser=require('pdf-parse');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const pdfData = req.body.file;
      const options = {}; // You can pass options for pdf-parse here if needed
      const parsedPdf = await pdfParser(pdfData, options);
      const text = parsedPdf.text;
      res.status(200).json({ text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error parsing PDF' });
    }
  } else {
    res.status(404).json({ error: 'Invalid method' });
  }
}