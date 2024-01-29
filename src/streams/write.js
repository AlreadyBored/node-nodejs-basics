import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILES_PATH = 'files';
const WRITE_FILE = 'fileToWrite.txt';
const writeFilePath = path.join(__dirname, FILES_PATH, WRITE_FILE)

const writeFile = (path) => {
    const writeStream = fs.createWriteStream(path, { encoding: 'utf-8' })

    process.stdin.pipe(writeStream)
}

const write = async () => {
    writeFile(writeFilePath)
};

await write();