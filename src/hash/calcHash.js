import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url),
          __dirname = dirname(__filename),
          fullPathToTargetFile = resolve(__dirname, './files/fileToCalculateHashFor.txt'),
          fileContent = await readFile(fullPathToTargetFile, 'utf8');
          
    const resultHash = createHash('sha256').update(fileContent).digest('hex');
    console.log(resultHash);
};

await calculateHash();