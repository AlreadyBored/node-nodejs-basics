import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const toRead = path.resolve(path.dirname(''), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    await fs.promises.readFile(toRead)
        .then(fileBuffer => {
            const hashSum = crypto.createHash('sha256');
            hashSum.update(fileBuffer);

            const hex = hashSum.digest('hex');

            console.log(hex);
        })
};

calculateHash()