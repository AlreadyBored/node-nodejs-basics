import { createHash } from 'node:crypto'
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    // Write your code here 
    const prReadFile = promisify(fs.readFile);
    try {
        const data = await prReadFile(`${__dirname}/files/fileToCalculateHashFor.txt`, { encoding: 'utf-8'})
        console.log(createHash('sha256').update(data).digest('hex'))
    }
    catch (err) {
        throw err
    }
};

await calculateHash();