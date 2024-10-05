import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const readableStream = createReadStream(
        './src/hash/files/fileToCalculateHashFor.txt',
        {
            encoding: 'utf-8'
        }
    );
    readableStream.on('data', (text) => {
        console.log(createHash('sha256').update(text).digest('hex'));
    });
};

await calculateHash();
