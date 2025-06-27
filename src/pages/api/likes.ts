import type { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';

const KEY = 'likes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get the current like count (default to 0 if not set)
    const likes = (await kv.get<number>(KEY)) || 0;
    res.status(200).json({ likes });
  } else if (req.method === 'POST') {
    // Atomically increment the like count
    const newLikes = await kv.incr(KEY);
    res.status(200).json({ likes: newLikes });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 