import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const write = async () => {
  const stream = fs.createWriteStream(path.resolve(_dirname, 'files', 'fileToWrite.txt'));

  process.stdin.pipe(stream);

  stream.on('error', function (error) {
    throw error;
  });
};

await write();
