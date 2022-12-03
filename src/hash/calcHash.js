import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    let filename = __dirname + '/files/fileToCalculateHashFor.txt';

    try {
        const content = await readFile(filename);
        const hash = createHash('sha256').update(content).digest('hex');

        console.log(hash);
    } catch (err) {
        throw err;
    }

};

await calculateHash();