import crypto from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { access } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    if (typeof crypto !== 'undefined') {
        try {
            await access(filePath);
            let readableStream = createReadStream(filePath, 'utf8');
            readableStream.on('data', function (chunk) {
                const hash = crypto.createHash('sha256');
                hash.update(chunk);
                const digestHash = hash.digest('hex');
                console.log(digestHash);
            });
        } catch {
            throw new Error('FS operation failed');
        }
    } else {
        console.log('Pocket is not sucess');
    }
};

await calculateHash();