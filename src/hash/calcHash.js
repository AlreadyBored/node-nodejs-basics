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
        // hash reads data
        console.log(hash.read());
    });

    // read file than pass data to hash 
    pipeline (
        fileToHashReadableStream,
        hash
    );
};

await calculateHash();

const calculateHash2 = async () => {
    const hash = createHash('sha256');

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToHashPath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileToHashReadableStream = createReadStream(fileToHashPath);

    fileToHashReadableStream.on('data', (chunck) => {
        // Updates the hash content with the given data
        hash.update(chunck)
    })

    fileToHashReadableStream.on('end', () => {
        // Calculates the digest of all of the data passed to be hashed
        const hexHash = hash.digest('hex')
        console.log(hexHash);
    });
};

await calculateHash2();