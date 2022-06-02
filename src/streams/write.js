import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const rs = process.stdin;
    const ws = fs.createWriteStream(pathToFile);
    rs.pipe(ws);
};
