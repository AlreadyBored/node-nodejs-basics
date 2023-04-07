import { createReadStream } from 'node:fs';

const read = async () => {
  const readStream = createReadStream('./files/fileToRead.txt', 'utf8');

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
