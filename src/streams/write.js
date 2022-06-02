import fs from 'fs';
import url from 'url';
import {stdin} from 'node:process';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
    let writable = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');
    stdin.pipe(writable);
};

write()