import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const url = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
  const readableStream = createReadStream(url, 'utf-8');
  readableStream.on('data', chunk => stdout.write(chunk));
};

await read();