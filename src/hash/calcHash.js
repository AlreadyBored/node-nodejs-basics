// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const hash = createHash('sha256');
    hash.setEncoding('hex');
    
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToHashPath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileToHashReadableStream = createReadStream(fileToHashPath);
    fileToHashReadableStream.on('end', () => {
        hash.end();
        console.log(hash.read());
    });

    pipeline (
        fileToHashReadableStream,
        hash
    );
};

await calculateHash();