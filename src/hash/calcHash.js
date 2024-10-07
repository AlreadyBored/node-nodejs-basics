import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const input = createReadStream(filePath);
  
    input.pipe(hash).setEncoding('hex').on('data', (hashValue) => {
      console.log(hashValue);
    }); 
};

await calculateHash();