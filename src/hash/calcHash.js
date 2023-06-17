import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {
    const content = await readFile(FILE_PATH, 'utf-8');
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();