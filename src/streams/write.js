import { createWriteStream } from 'fs';
import { customError, getPath } from '../fs/fs-constants.js';

const filePath = getPath(import.meta.url, 'fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(filePath);
  // const writableStream = createWriteStream(filePath, { flags: 'a' });

  process.stdin.pipe(writableStream);

  writableStream.on('error', () => {
    throw new Error(customError);
  });
};

await write();