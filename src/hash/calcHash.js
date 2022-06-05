import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { join } from 'path';
import { getDirAndFilePath } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const calculateHash = async () => {
    const fileForHash = await readFile(
        join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 
        { encoding: 'utf-8' }
    );

    const hash = createHash('sha256');

    return hash
            .update(fileForHash)
            .digest('hex');
};

calculateHash().then(hash => console.log(hash));