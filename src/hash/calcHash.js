// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');
    hash.setEncoding('hex');
    
    const fileToHashReadableStream = createReadStream('./files/fileToCalculateHashFor.txt');
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