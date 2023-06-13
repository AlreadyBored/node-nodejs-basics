import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const calculateHash = async () => {
    const pathToFile = '/files/fileToCalculateHashFor.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const fileContent = await readFile(`${__dirname}${pathToFile}`);
    const hash = createHash('sha256').update(fileContent).digest('hex');

    console.log('File hash <-------', hash);
};

await calculateHash();