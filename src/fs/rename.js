import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const rename = async () => {
  const souceFile = path.resolve(_dirname, 'files', 'wrongFilename.txt');
  const destFile = path.resolve(_dirname, 'files', 'properFilename.md');

  fs.rename(souceFile, destFile, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await rename();
