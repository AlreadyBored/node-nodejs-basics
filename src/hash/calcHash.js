import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const pathToHashFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    let hash = createHash('sha256');

    try{
        let input = await readFile(pathToHashFile);
        hash = hash.update(input).digest('hex');
        console.log(hash);
    } catch (err){
        throw err;
    }
};

await calculateHash();