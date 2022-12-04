import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const calculateHash = async () => {
    const data = await fs.readFile(path.join(dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hex = crypto.createHash('sha256').update(data).digest('hex');

    console.log(hex);
};

await calculateHash();