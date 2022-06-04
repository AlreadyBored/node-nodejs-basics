import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHash } from 'crypto';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const pathToFileName = path.join(__dirname, '/files', fileName);

    const readableStream = fs.createReadStream(pathToFileName);
    readableStream.on('data', (chunk) => {
        const data = chunk.toString();
        const hash = createHash('sha256').update(data).digest('hex');
        // return hash;
        console.log(hash);
    });
};

calculateHash();
