import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');

    try {
        await pipeline(
            createReadStream(filePath),
            hash
        );

        const fileHash = hash.digest('hex');
        console.log(fileHash);
    } catch (error) {
        console.error('An error occurred while calculating the hash:', error);
    }
};

await calculateHash();