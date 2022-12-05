import { createReadStream } from 'node:fs';

const read = async () => {
  const path = './files/fileToRead.txt';
  const readStream = createReadStream(path, 'utf8');
  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
