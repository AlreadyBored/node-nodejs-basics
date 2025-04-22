import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto'

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToCalculateHashFor = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');

    const readSteam = fs.createReadStream(fileToCalculateHashFor);

    readSteam.on('data', (chunk) => {
        hash.update(chunk);
    });

    readSteam.on('end', () => {
        console.log(hash.digest('hex'));
    });

    readSteam.on('error', (err) => {
        console.error(err);
    });
};

await calculateHash();