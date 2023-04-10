import { createHash } from 'crypto';
import { readFile } from 'fs';
import { stdout } from 'process';
import path from 'path';

const __dirname = path.resolve();
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    await readFile(filePath, (err, file) => {
        if (err) throw err;
        const hexed = createHash('sha256').update(file).digest('hex');
        stdout.write(`the hex of sha256 of fileToCalculateHashFor.txt is ${hexed}`)
    });
};

await calculateHash();