import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import crypto from 'crypto';
const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const ReadStream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256');
    ReadStream.on('data', (chunk) => {
        hash.update(chunk);
    })
    ReadStream.on('end', () => {
        const Value = hash.digest('hex');
        console.log(Value);
    })
};

await calculateHash();