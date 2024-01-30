import { createReadStream } from 'fs';
import { createHash } from 'crypto';


const calculateHash = async () => {
    const hash = createHash('sha256');
    const fileStream = createReadStream('src/hash/files/fileToCalculateHashFor.txt');

    fileStream.pipe(hash).setEncoding('hex');

    fileStream.on('end', () => {
        console.log(hash.read());
    });
};

await calculateHash();