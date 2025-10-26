import fs from 'node:fs';
import path from 'node:path';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const stream = fs.createWriteStream(filePath);

  process.stdin.pipe(stream);
};

await write();
