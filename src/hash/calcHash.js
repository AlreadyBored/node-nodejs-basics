import { createHash } from 'crypto'
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILES_PATH = 'files';
const CALCULATE_TO_HASH_FILE = 'fileToCalculateHashFor.txt'
const pathCalculateToHashFile = path.join(__dirname, FILES_PATH, CALCULATE_TO_HASH_FILE)

const calculateFileToHash = (path) => {
    const hash = createHash('sha256')
    const readStream = fs.createReadStream(path)

    readStream.pipe(hash);

    readStream.on('end', () => {
        const fileHash = hash.digest('hex');

        console.log(fileHash);
    });
}

const calculateHash = async () => {
    calculateFileToHash(pathCalculateToHashFile)
};

await calculateHash();