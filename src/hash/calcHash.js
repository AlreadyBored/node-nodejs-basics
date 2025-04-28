import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        const filePath = path.join(__dirname, 'files', FILENAME);
        const readStream = fs.createReadStream(filePath);
        const hash = crypto.createHash('sha256');
    
        readStream.pipe(hash).on('finish', () => {
            console.log(hash.digest('hex'));
        });
       } catch (e) {
        console.log(e);
       }
};

await calculateHash();