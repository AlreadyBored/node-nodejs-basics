import { readFile } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const absoluteFilePath = await resolve('files', 'fileToCalculateHashFor.txt');

    await readFile(absoluteFilePath, (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        };
        const hash = createHash('sha256');
        const hex = hash.update(data).digest('hex');
        console.log(hex);
    });
};

await calculateHash();