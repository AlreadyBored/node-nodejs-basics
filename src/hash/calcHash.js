import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { createHash } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filePath = path.resolve(__dirname,'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');

    const stream = createReadStream(filePath);
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
