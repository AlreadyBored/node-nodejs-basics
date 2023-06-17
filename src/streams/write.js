import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';
import {pipeline} from 'stream/promises'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const fileForWrite = path.join(__dirname, 'files', 'fileTowrite.txt')

    const writeStream = fs.createWriteStream(fileForWrite);
    await pipeline(process.stdin, writeStream)
  // Write your code here
};

await write();
