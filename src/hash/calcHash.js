import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const contents = await readFile(filePath);

        let hash = createHash('SHA256').update(contents);
        console.log(hash.digest('hex'));
       
    } catch (err) {
        throw err;
    }
};

await calculateHash();