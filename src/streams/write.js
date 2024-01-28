import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(filePath, { flags: 'a' });

  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT. Closing streams and exiting...');
    writableStream.end();
    process.exit();
  });

  try {
    console.log('Writing to file completed successfully.');
    await pipeline(process.stdin, writableStream);
  } catch (error) {
    console.error(error);
  }
};

await write();
