import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const fileToCalculateHashFor = './files/fileToCalculateHashFor.txt';

const calculateHash = async (fileToHash) => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteFolderPath = path.join(__dirname, fileToHash);

    const data = await readFile(absoluteFolderPath);
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
};

await calculateHash(fileToCalculateHashFor);