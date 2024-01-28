import { createHash } from 'node:crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const calculateHash = async () => {
    const hash = createHash('sha256');
    const readableStream = fs.createReadStream(path.join(__dirname, 'files','fileToCalculateHashFor.txt'));

    readableStream.on('data', (data)=>{
        hash.update(data);
    })
    readableStream.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
    });
    readableStream.on('end', () => {
        console.log(hash.digest('hex'));
    });

};

await calculateHash();