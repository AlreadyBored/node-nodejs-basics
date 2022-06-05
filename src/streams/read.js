import { createReadStream } from 'node:fs';

export const read = async () => {
  const fileName = './src/streams/files/fileToRead.txt';
  const stream = createReadStream(fileName, { encoding: 'utf8' });
  stream.on('error', (err) => reject(err));
  stream.on('data', (chunk) => process.stdout.write(chunk));
};

read();
