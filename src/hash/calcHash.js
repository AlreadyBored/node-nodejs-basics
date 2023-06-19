import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
const calculateHash = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcFile = join(currentDir, 'files', 'fileToCalculateHashFor.txt');
    const hash = await createHash('sha256');

    try {
        const content = await readFile(srcFile, { encoding: 'utf-8'});
        console.log(hash.update(content).digest('hex'));
    } catch (err) {
        console.log(err)
    }
};

await calculateHash();