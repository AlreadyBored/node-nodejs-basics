import fs from 'node:fs';
import { join } from 'node:path';

const FILE_NAME = 'fileToRead.txt';
const FOLDER = '/files';

const fullName = join(import.meta.dirname, FOLDER, FILE_NAME);

const read = async () => {
  let readStream = fs.createReadStream(fullName, {
    encoding: 'utf8',
  });

  readStream.pipe(process.stdout);

  readStream.on('error', error => {
    console.error(error);
  });
};

await read();
