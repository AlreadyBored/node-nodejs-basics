//6

import { readFile } from 'node:fs';
const read = async () => {
readFile('./fs/files/fileToRead.txt', (err, data) => {
  if (err) console.log('FS operation failed');
  else console.log(data.toString());
});
}

await read();