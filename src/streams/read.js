import { createReadStream } from 'fs';
import { getPath } from '../fs/fs-constants.js';

const filePath = getPath(import.meta.url, 'fileToRead.txt');

const read = async () => {
  const readableStream = createReadStream(filePath);

  readableStream.pipe(process.stdout);
};

await read();