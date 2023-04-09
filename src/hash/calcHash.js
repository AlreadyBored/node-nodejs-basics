import fs from 'fs/promises';
const { createHash } = await import('node:crypto');
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fileToCalculateHashFor.txt'
const folder = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, folder, fileName)

const calculateHash = async () => {
    const fileContent = await fs.readFile(filePath);

    const hash = createHash('sha256');
    hash.update(fileContent);
    const hashHex = hash.digest('hex');

    console.log(hashHex);
};

await calculateHash();

