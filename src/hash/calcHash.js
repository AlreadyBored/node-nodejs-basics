import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
  try {
    const filePath = path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

    await fs.promises.access(filePath);

    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream(filePath);

    await pipeline(fileStream, hash);

    const hexHash = hash.digest('hex');
    console.log(hexHash);

  } catch {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
