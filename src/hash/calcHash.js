import path from 'path';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
    const text = await readFile(path.join(path.resolve(), 'files', 'fileToCalculateHashFor.txt'));

    const { createHmac } = await import('crypto');
    const secret = 'abcdefg';
    const hash = createHmac('sha256', secret)
        .update(text)
        .digest('hex');
    console.log(hash);
};

calculateHash()