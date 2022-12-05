import {createReadStream} from 'fs';
import {__dirnameGet, fileExists, log} from "../fs/utils.mjs";

const read = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/files/fileToRead.txt`;
  const endWithEmptyLine = true;

  if (!await fileExists(fileName)) {
    throw new Error('FS operation failed');
  }
  const reader = createReadStream(fileName);
  reader.pipe(process.stdout, {end: !endWithEmptyLine});
  endWithEmptyLine && reader.on('end', () => log(''))
};

await read();
