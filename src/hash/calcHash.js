import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import url from 'url';

const calculateHash = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const file = path.join(path.dirname(__filename), 'files', 'fileToCalculateHashFor.txt');
    const fileReadStream = fs.createReadStream(file);

    const hash = createHash('sha256');

    fileReadStream.on('data', (data) => {
        hash.update(data);
    });

    fileReadStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });
};

await calculateHash();