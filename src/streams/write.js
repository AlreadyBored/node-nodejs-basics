import url from 'url';
import path from 'path';
import { createWriteStream } from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToWrite.txt');

const write = async () => {
    process.stdin.pipe(createWriteStream(pathToFile, { encoding: 'utf8', flags: 'a+' }));
};

await write();