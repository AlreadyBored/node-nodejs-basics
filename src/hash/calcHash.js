import fs from 'node:fs'
import path from 'node:path';
import crypto from 'node:crypto'

const calculateHash = async () => {
    const pathFile = path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');

    fs.readFile(pathFile, (err, data) => {
        if (err) {
            console.log('File read error');
            return;
        }
        console.log(hash.update(data).digest('hex'));
    });
};

await calculateHash();