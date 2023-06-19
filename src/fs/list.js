import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const list = async () => {
  const sourceFolder = path.resolve(_dirname, 'files');

  fs.readdir(sourceFolder, (err, files) => {
    if (err) throw new Error('FS operation failed');

    console.log(files);
  });
};

await list();
