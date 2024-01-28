import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const targetFile = await readFile(join(__dirname,'/files/fileToCalculateHashFor.txt'), {encoding:'utf-8'});

    const hash =  createHash('sha256').update(targetFile).digest('hex');

    console.log('Hash:', hash);
};

await calculateHash();