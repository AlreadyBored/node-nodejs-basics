import { stdin, stdout } from 'process';
import { createWriteStream } from 'fs';
import { appendFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeFIle = createWriteStream(pathToFile, 'utf-8');
    stdout.write('Hello! Write smth: ');
    stdin.on('data', async data => {
        writeFIle.write(data);
    })
    stdin.on('error', err => { throw new Error(err) });
};

await write();