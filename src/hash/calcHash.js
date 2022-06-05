import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const data = await fs.readFile('./files/fileToCalculateHashFor.txt', {
        encoding: 'utf8',
    });

    const hash = crypto.createHash('sha256');
    hash.update(data);

    return hash.digest('hex');
};
