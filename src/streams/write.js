import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToWrite = 'fileToWrite.txt';
const encoding = 'utf8';

const write = async () => {
  
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToWritePath = path.join(__dirname, dirContext, fileToWrite);

    // Open write stream.
    const w = fs.createWriteStream(fileToWritePath, encoding);

    // On data in console tranfer it into write stream.
    process.stdin.on('data', data => {
        w.write(data);
      });
};

await write();