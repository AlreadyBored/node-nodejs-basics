import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

    fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) throw err;
        const hash = createHash('sha256')
        .update(data)
        .digest('hex');
    console.log(hash.toUpperCase());
    })

};

await calculateHash();