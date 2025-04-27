import { open } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// calcHash.js - implement function that calculates SHA256 hash for file
//  fileToCalculateHashFor.txt and logs it into console as hex using
// Streams API

const calculateHash = async () => {
    // Write your code here
    const pathToFile = './files';
    const fileName = 'fileToCalculateHashFor.txt';

    const fullPathToFile = `${pathToFile}/${fileName}`;

    const fd = await open(fullPathToFile);
    const stream = fd.createReadStream();

    const hash = createHash('sha256');

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`Hash in hex: ${hexHash}`);
    });

    stream.on('error', (err) => {
        console.error('Stream error: ', err);
    });
};

await calculateHash();
