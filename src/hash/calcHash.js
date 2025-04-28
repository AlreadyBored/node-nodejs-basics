import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
         
  const hash = createHash('sha256');
  const stream = fs.createReadStream(filePath);

  stream.on('error', (err) => {
    console.error(`File read error: ${err.message}`);
    throw new Error('FS operation failed');
  });

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    const digest = hash.digest('hex');
    console.log(digest);
  });
};

await calculateHash();
