import { createReadStream } from 'node:fs'
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const pathToTarget = path.join(__dirname, 'files','fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const readStream = createReadStream(pathToTarget);

    readStream.on('data', chunk => {
        hash.update(chunk);
    })

    readStream.on('end', () => {
        console.log(hash.digest('hex'))
    })
};

await calculateHash();
