import {createHash} from 'crypto';
import {createReadStream} from 'fs';
import path from "path";

const calculateHash = async () => {
    const hashSum = createHash('SHA256');
    const file = path.join(import.meta.dirname,'files','fileToCalculateHashFor.txt');
    const readStream = createReadStream(file);

    readStream.on('data', (chunk) => {
        hashSum.update(chunk);
    });

    readStream.on('end', () => {
        console.log(hashSum.digest('hex'));
    });
};

await calculateHash();
