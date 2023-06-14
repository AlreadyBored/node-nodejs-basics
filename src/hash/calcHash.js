import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {

    const data = await readFile(filePath);
    const hashedData = createHash('sha256').update(data);

    console.log(hashedData.digest('hex'));

};

await calculateHash();