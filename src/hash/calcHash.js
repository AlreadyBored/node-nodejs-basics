import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath);
    const hash = createHash('sha256');

    try {
        await pipeline(
            readStream,
            hash
        );

        console.log(hash.digest('hex'));
    } catch (error) {
        console.error('Error calculating hash:', error.message);
    }
};

await calculateHash();
