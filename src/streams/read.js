import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const readFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(readFile);

    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readStream.on('end', () => {
      process.stdout.write('\n');
    });

    readStream.on('error', (error) => {
      console.error(error.message);
    });
};

await read();