import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    fs.readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        } else if (data) {
            process.stdout.write(crypto.createHash('sha256').update(data).digest('hex'));
        }
    });
};

await calculateHash();