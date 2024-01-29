import fs from 'fs';
import { stdout } from 'process';

const read = async () => {
  const stream = fs.createReadStream('src/streams/files/fileToRead.txt');

  stream.on('data', (chunk) => stdout.write(chunk));
};

await read();