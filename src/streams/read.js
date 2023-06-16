import { createReadStream } from 'node:fs';

const read = async () => {
  const path = 'src/streams/files/fileToRead.txt';
  const readStream = createReadStream(path);
  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  })
};
await read();
