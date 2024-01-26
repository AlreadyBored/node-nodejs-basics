import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const readFile = currentDir + '/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const file = createReadStream(readFile);
    const hash = createHash('sha256');
    file.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();