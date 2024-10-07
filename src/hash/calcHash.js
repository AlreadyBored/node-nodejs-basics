import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here 
    const fileContent = await readFile(filePath);
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(`SHA256 hash: ${hash}`);
};

await calculateHash();