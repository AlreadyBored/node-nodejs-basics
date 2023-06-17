import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const file = join(__dirname, 'files', 'fileToWrite.txt');

  const writableStream = createWriteStream(file);
  //console.log('Writable stream created');

  try {
    await pipeline(writableStream);
    console.log('Data written to file successfully.');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
};

await write();
