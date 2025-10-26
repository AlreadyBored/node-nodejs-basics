import { createWriteStream } from 'fs';

const write = async () => {
  const stream = createWriteStream('./src/streams/files/fileToWrite.txt');
  process.stdin.pipe(stream);
};

await write();
