import {fileURLToPath} from "url";
import path from 'path';
import {createReadStream} from "fs";

const calculateHash = async () => {
    const { createHash } = await import('node:crypto');

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const hash = createHash('sha256');
    const readStream = createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);

    readStream.pipe(hash)
        .setEncoding('hex')
        .pipe(process.stdout);
};

await calculateHash();