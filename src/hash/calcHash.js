import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto'


const calculateHash = async () => {
    const hash = 'SHA256';

    const filePath = path.dirname(fileURLToPath(import.meta.url)) + '/files/fileToCalculateHashFor.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
        const hashedData = createHash('sha256').update(data).digest('hex');
        console.log(hashedData);
      });
};

await calculateHash();