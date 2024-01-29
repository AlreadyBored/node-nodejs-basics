import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILES_PATH = 'files';
const READ_FILE = 'fileToRead.txt';
const readFilePath = path.join(__dirname, FILES_PATH, READ_FILE)

const readFile = (path) => {
    const readStream = fs.createReadStream(path, { encoding: 'utf-8' });

    readStream.pipe(process.stdout)
}

const read = async () => {
    readFile(readFilePath)
};

await read();