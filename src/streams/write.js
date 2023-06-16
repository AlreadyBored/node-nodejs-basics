import { createWriteStream } from 'node:fs';

const write = async () => {
  const file = 'src/streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(file);
  
  process.stdin.pipe(writeStream);
};

await write();
