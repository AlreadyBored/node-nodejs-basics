import fs from 'fs';
import url from 'url';
import {stdout} from 'node:process';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
    let readableStream = fs.createReadStream(__dirname + '/files/fileToRead.txt');

    readableStream.on('data', chunk => {
        stdout.write(chunk)
    })
};

read()