import { createReadStream } from 'node:fs';

const url = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
  createReadStream(url).pipe(process.stdout);
};

await read();
