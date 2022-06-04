import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const write = async () => {
    const fileName = 'fileToWrite.txt';
    const pathToWriteFile = path.join(__dirname, '/files', fileName);

    const writableStream = fs.createWriteStream(pathToWriteFile);
    process.stdin.on('data', chunk => writableStream.write(chunk));
    // Write your code here
};

write();
