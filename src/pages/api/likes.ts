import type { NextApiRequest, NextApiResponse } from 'next';
import { Redis } from '@upstash/redis';

// Use the KV_ environment variables from your Vercel integration
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const KEY = 'likes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get the current like count (default to 0 if not set)
    const likes = (await redis.get<number>(KEY)) || 0;
    res.status(200).json({ likes });
  } else if (req.method === 'POST') {
    // Atomically increment the like count
    const newLikes = await redis.incr(KEY);
    res.status(200).json({ likes: newLikes });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}