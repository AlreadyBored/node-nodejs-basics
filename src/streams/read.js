import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(pathToFile);

  stream.on('data', (block) => {
    // console.log('block = ', block)
    process.stdout.write(block);    
  });

  stream.on('end', () => {
    // All data has been read!
  });

  stream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
};

await read();