import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const read = async () => {
  const sourceFile = path.resolve(_dirname, 'files', 'fileToRead.txt');

  fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) throw new Error('FS operation failed');

    console.log(data);
  });
};

await read();
