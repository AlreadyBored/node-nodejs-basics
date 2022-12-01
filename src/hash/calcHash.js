import { createHash } from 'node:crypto';
import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));

    try {
        const content = await fs.readFile(`${directory}/files/fileToCalculateHashFor.txt`);
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (err) {
        throw new Error(hash);
    }

};

await calculateHash();