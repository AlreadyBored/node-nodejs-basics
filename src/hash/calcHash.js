import {  readFile } from 'node:fs/promises';
import { createHash} from 'node:crypto';

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    const content = await readFile(path, { encoding: 'utf8' });
    const hash = await createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();