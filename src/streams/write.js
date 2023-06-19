import { createWriteStream } from 'node:fs';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const readableFromTerminal = process.stdin;
  const writableToFile = createWriteStream(filePath);

  readableFromTerminal.pipe(writableToFile);
};

await write();
