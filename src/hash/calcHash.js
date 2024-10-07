import crypto from 'crypto'
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path  from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const hash = crypto.createHash('sha256');
        const readStream =  fs.createReadStream(pathToFile);

        readStream.on('data', chunk => {
            hash.update(chunk);
        });

        readStream.on('end', () =>{
            console.log(hash.digest('hex'));
        })

    } catch (error) {
        throw error;
    }
};

await calculateHash();