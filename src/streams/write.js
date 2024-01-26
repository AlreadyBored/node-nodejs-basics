import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.resolve(__dirname, './files/fileToWrite.txt');
  const fileWriteStream = fs.createWriteStream(filePath, {encoding: 'utf-8'});

  process.stdin.pipe(fileWriteStream);
};

await write();
