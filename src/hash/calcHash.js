import fs from 'node:fs';
import { createHash } from 'crypto'
import { resolve } from 'path';

const path = resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        } else if (data) {
            const hash = createHash("sha256").update(data).digest("hex");
            console.log(hash);
        } 
    });
};

await calculateHash();