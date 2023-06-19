import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const remove = async () => {
  const sourceFile = path.resolve(_dirname, 'files', 'fileToRemove.txt');

  fs.unlink(sourceFile, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await remove();
