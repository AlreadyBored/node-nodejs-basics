import { readFile } from 'fs';
import { HELPER } from './modules/helpers.mjs';

const read = async () => {
  const __dirname = HELPER.getDirPath(import.meta.url);
  readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8', (err, data) =>
    err ? HELPER.fsErrCb(err) : console.log(data)
  );
};

await read();
