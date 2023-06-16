import {createReadStream} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const readStream = createReadStream(filePath);

    return new Promise((resolve, reject) => {
        readStream.on('data', (data) => {
            hash.update(data);
        });

        readStream.on('end', () => {
            const hashValue = hash.digest('hex');
            console.log(hashValue);
            resolve();
        });

        readStream.on('error', (error) => {
            reject(error);
        });
    });
};

await calculateHash();