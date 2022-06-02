import fs from 'fs';
import url from 'url';
import path from 'path';
import crypto from 'crypto';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const data = await fs.promises.readFile(pathToFile, { encoding: 'utf8' });
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
};