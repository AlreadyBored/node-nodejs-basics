import { createHash } from "crypto";
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    const fileToRead = 'src/hash/files/fileToCalculateHashFor.txt';
    const content = await readFile(fileToRead, { encoding: 'utf8' });
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash)
};

await calculateHash();