import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);
    const fileNameToCalculateHashFor = 'fileToCalculateHashFor.txt';
    const filePath = join(_dirname, 'files', fileNameToCalculateHashFor);

    return new Promise((res, rej) => {
        const hash = createHash('sha256');
        const stream = createReadStream(filePath);

        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
            res(hexHash);
        });

        stream.on('error', (error) => {
            rej(error);
        });
    });
};

await calculateHash();