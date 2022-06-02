import { createReadStream } from 'fs';

export const read = async () => {
  const stream = createReadStream('src/streams/files/fileToRead.txt', 'utf8');

  stream.on('data', (text) => process.stdout.write(text));
};

read();
