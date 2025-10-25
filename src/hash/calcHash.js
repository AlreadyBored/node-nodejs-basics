import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256'); 

  const stream = createReadStream(filePath); 

  stream.on('error', (err) => {
    console.error(errorText, err);
  });

  stream.on('data', (chunk) => hash.update(chunk));

  stream.on('end', () => {
    const result = hash.digest('hex');
    console.log(result);
  });
};

await calculateHash();