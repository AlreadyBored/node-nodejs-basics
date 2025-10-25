import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => {
      const finalHash = hash.digest('hex');
      console.log(finalHash);
      resolve(finalHash);
    });
    stream.on('error', (err) => reject(err));
  });
};

await calculateHash();
