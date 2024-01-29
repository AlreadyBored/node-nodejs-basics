import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const content = createReadStream('./files/fileToCalculateHashFor.txt');
    
    content.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();