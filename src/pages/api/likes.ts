import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'likes.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read likes from file
const readLikes = (): number => {
  try {
    ensureDataDir();
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data).likes || 0;
    }
  } catch (error) {
    console.error('Error reading likes:', error);
  }
  return 0;
};

// Write likes to file
const writeLikes = (likes: number) => {
  try {
    ensureDataDir();
    fs.writeFileSync(dataFilePath, JSON.stringify({ likes }));
  } catch (error) {
    console.error('Error writing likes:', error);
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const likes = readLikes();
    res.status(200).json({ likes });
  } else if (req.method === 'POST') {
    const currentLikes = readLikes();
    const newLikes = currentLikes + 1;
    writeLikes(newLikes);
    res.status(200).json({ likes: newLikes });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 