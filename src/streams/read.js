import { createReadStream } from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToRead.txt');

const read = async () => {
    createReadStream(pathToFile).pipe(process.stdout);
};

await read();