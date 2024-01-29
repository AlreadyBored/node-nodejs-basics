import cr from 'node:crypto';
import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    let readStream = fs.createReadStream(filePath);
    let hash = cr.createHash('sha256');
    hash.setEncoding('hex');

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    })

    readStream.on('error', (err) => {
        throw err;
    })

    readStream.on('end', () => {
        let finalHash = hash.digest('hex');

        console.log(finalHash);
    })
};

await calculateHash();