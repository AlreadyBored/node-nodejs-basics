import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
        }

        if (data) {
            const hash = createHash('sha256').update(data).digest('hex')

            console.log(hash);
        }
    });
};

await calculateHash();