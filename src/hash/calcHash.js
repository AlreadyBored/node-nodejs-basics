import { createHash } from 'crypto';
import { readFile } from "fs/promises";

const calculateHash = async () => {
    const fileBuffer = await readFile('./files/fileToCalculateHashFor.txt');

     const hash = createHash('sha256').update(fileBuffer).digest('hex');
     console.log(hash);
};

await calculateHash();
