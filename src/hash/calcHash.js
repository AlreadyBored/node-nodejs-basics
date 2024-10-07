import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    fs.readFile(__dirname + '\\files\\fileToCalculateHashFor.txt', (err, data) => {
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        } else if (data) {
            process.stdout.write(crypto.createHash('sha256').update(data).digest('hex'));
        }
    });
};

await calculateHash();