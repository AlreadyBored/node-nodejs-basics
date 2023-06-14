import { createHash } from 'node:crypto';
import fsPromises from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const content = await fsPromises
        .readFile(resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = createHash('sha256').update(content);
    console.log(hash.digest('hex'));
};

await calculateHash();