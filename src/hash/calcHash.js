import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {createHash} from 'crypto';
import {createReadStream} from 'fs';

const calculateHash = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');
    const stream = createReadStream(filePath);
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });
    stream.on('error', () => {
        throw new Error('FS operation failed');
    });
};

await calculateHash();