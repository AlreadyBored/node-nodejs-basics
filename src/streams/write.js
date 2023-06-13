import { createWriteStream } from 'fs';
import { HELPER } from '../fs/modules/helpers.mjs';

const write = async () => {
  const filePath =
    HELPER.getDirPath(import.meta.url) + '/files/fileToWrite.txt';
  const file = createWriteStream(filePath);
  process.stdin.pipe(file);
  process.stdin.resume();
};

await write();
