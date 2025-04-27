import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

    stream.on('error', (error) => {
      console.error(`Error: ${error.message}`);
      reject(error);
    });

    let data = '';
    stream.on('data', (chunk) => {
      data += chunk;
    });

    stream.on('end', () => {
      console.log(data);
      resolve();
    });
  });
};

await read();
