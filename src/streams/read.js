import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

    for await (const chunk of readableStream) {
      process.stdout.write(chunk);
    }
  } catch (error) {
    console.error('An error occurred while reading the file:', error.message);
  }
};

await read();
