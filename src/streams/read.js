import path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const read = async () => {
  const stream = fs.createReadStream(path.resolve(_dirname, 'files', 'fileToRead.txt'));

  stream.on('data', function (chunk) {
    process.stdout.write(chunk);
  });

  stream.on('error', function (error) {
    throw error;
  });
};

await read();
