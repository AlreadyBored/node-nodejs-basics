import { createWriteStream } from 'fs';

export const write = async () => {
  const stream = createWriteStream('src/streams/files/fileToWrite.txt', 'utf8');

  process.stdin.pipe(stream);
};

write();
