import path from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256').update(file).digest('hex')
    console.log(hash)
};

await calculateHash();
