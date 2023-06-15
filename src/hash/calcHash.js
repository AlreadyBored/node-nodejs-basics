import { readFile } from 'fs/promises';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const contents = await readFile(`src/hash/files/fileToCalculateHashFor.txt`, { encoding: 'utf8' });
    const hash = createHash('sha256');
    const result = hash.update(contents).digest('hex');
    console.log(result);
};

await calculateHash();
