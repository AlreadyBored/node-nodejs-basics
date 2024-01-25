import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const calculateHash = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const readFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const readStream = fs.createReadStream(readFile);
    const hash = crypto.createHash('sha256');

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      const resultHash = hash.digest('hex');
      console.log(`SHA256 hash of file: ${resultHash}`);
    });
      
    readStream.on('error', (error) => {
      console.error(error.message);
    });

    readStream.resume();
};

await calculateHash();