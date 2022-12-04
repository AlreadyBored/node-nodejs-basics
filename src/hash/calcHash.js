import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToHash = path.dirname(__filename) + '/files/fileToCalculateHashFor.txt';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256');

    const contents = await readFile(__fileToHash, { encoding: 'utf8' });
    hash.update(contents);
    console.log(hash.digest('hex'));
};

await calculateHash();