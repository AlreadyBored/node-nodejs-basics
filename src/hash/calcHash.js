import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getDir } from '../utils.js';

const dir = getDir(import.meta.url);

const calculateHash = async () => {
    const filePath = path.join(dir, './files/fileToCalculateHashFor.txt');

    const data = await readFile(filePath);
    const hash = createHash('sha256').update(data).digest('hex');
    process.stdout.write(hash);
};

await calculateHash();