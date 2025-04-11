import crypto from 'crypto';
import path from 'node:path';
import {readFile} from 'node:fs/promises';

const calculateHash = async () => {
    const filePath = path.resolve('src/hash/files/fileToCalculateHashFor.txt');
    const data = await readFile(filePath, 'utf8');
    const hash = crypto.createHash('sha256')
                    .update(data)
                    .digest('hex');
    console.log(hash);
};

await calculateHash();
