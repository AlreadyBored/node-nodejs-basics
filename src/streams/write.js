import { createWriteStream } from 'node:fs';

export const write = async () => {
  const fileName = './src/streams/files/fileToWrite.txt';
  let stream = createWriteStream(fileName);
  process.stdin.pipe(stream);
};

write();
