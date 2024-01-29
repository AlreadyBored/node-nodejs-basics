import fs from 'fs';
import { stdin } from 'process';

const write = async () => {
  const stream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

  stdin.pipe(stream);
};

await write();