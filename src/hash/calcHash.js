import fs from 'fs';
import url from 'url';
import path from 'path';
import { createHash } from 'crypto';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const fileContent = await fs.promises.readFile(pathToFile);
    const hash = createHash('sha256');
    hash.update(fileContent);

    console.log(hash.digest('hex'));
};

await calculateHash();