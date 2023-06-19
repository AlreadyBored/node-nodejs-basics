import path from 'path';
import * as fs from 'fs';
import crypto from 'crypto';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const calculateHash = async () => {
  const sourcePath = path.resolve(_dirname, 'files', 'fileToCalculateHashFor.txt');

  fs.readFile(sourcePath, 'utf-8', (err, data) => {
    if (err) throw err;

    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

await calculateHash();
