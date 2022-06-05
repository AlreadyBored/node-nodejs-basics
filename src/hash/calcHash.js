import fs from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const dataFromFile = fs.readFileSync('./files/fileToCalculateHashFor.txt');
    return createHash('sha256').update(dataFromFile).digest('hex');
};

async function run() {
    const hash = await calculateHash();
    console.log(hash);
}

await run();