import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const create = async () => {
  const sourceFile = path.resolve(_dirname, 'files', 'fresh.txt');

  fs.writeFile(sourceFile, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await create();
