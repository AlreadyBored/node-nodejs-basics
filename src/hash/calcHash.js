import { readFile } from 'node:fs/promises';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    // Write your code here 
    const dataForHash = await readFile("src/hash/files/fileToCalculateHashFor.txt", { encoding: 'utf-8' })
    const hash = createHash('sha256')
        .update(dataForHash)
        .digest('hex');
    console.log(hash);
};

await calculateHash();