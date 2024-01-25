import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  try {
    const writableStream = createWriteStream(pathToFile, { flags: 'a' });

    process.stdin.on('data', (block) => {
      writableStream.write(block);
    });

    process.stdin.on('end', () => {
      writableStream.end();
      console.log('Data has been written to fileToWrite.txt');
    });
  } catch (error) {
    console.error('An error occurred while writing to the file:', error);
  }
};

await write();