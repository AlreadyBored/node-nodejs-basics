import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

export const calculateHash = async () => {
    const filePath = fileURLToPath(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));

    const data = await readFile(filePath, 'utf-8');

    const hash = await createHash('sha256')
        .update(data)
        .digest('hex');

    console.log(hash);

    return hash;
};

calculateHash();
