import { createReadStream } from 'fs';

const read = async () => {
  const stream = createReadStream('./src/streams/files/fileToRead.txt');
  stream.pipe(process.stdout);
};

await read();
