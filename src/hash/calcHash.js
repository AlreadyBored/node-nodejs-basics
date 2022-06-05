import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const toRead = path.resolve(path.dirname(''), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    await fs.promises.readFile(toRead)
        .then(fileBuffer => {
            console.log(crypto.createHash('sha256').update(fileBuffer).digest('hex'));
        })
};

calculateHash()