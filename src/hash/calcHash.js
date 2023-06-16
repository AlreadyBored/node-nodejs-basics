import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');


const calculateHash = async () => {
    fs.readFile(file, { encoding: 'utf8' }).then((data) => {
        console.log(createHash('sha256').update(data).digest('hex'));
    }).catch(() => {
        throw new Error('FS operation failed');
    });
};

await calculateHash();