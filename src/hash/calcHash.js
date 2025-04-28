import crypto from 'crypto';
import fs from 'node:fs';
import { stdout } from 'node:process';
const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(`${import.meta.dirname}/files/fileToCalculateHashFor.txt`);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
