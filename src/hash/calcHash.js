import { readFile } from 'node:fs/promises';
import { createHash } from 'crypto';

const filePath = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
    const fileContent = await readFile(filePath);
    const hashData = createHash('sha256').update(fileContent).digest('hex');
    console.log(hashData);
};

await calculateHash();