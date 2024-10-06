import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

const calculateHash = async () => {
    const stream = fs.createReadStream(path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt'))
    
    stream
        .on('data', (chunk) => console.log(createHash('sha256').update(chunk.toString()).digest('hex')));

};

await calculateHash();