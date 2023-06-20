
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const fileContent = async (path) => {
        try {
            const content = await readFile(path);
            return content;
        } catch (err) {
            return false;
        }
    }
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    const fileToHash = await fileContent(path);
    const hash = createHash('sha256');
    hash.update(fileToHash);
    console.log(hash.digest('hex'));
};

await calculateHash();