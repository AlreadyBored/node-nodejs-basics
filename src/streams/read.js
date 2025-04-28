import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  const stream = fs.createReadStream(filePath);
    
  
  stream.on('error', () => {
    throw new Error('FS operation failed');
  });

  stream.pipe(process.stdout);
};

await read();
