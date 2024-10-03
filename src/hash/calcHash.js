import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    try {
        const fileForHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const readStream = fs.createReadStream(fileForHash);
        const hash = createHash('sha256');

        readStream.pipe(hash).on('finish', () => {
            console.log(`SHA256 hash of file: ${hash.digest('hex')}` );
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

await calculateHash();