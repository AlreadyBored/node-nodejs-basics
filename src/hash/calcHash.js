import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import crypto from 'crypto'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const input = fs.createReadStream(path.join(__dirname, 'files', "fileToCalculateHashFor.txt"));
    const hash = crypto.createHash('sha256');

    input.on('data', (data) => {
        hash.update(data);
        process.stdout.write(`${hash.digest('hex')}`);
    });
};

await calculateHash();
