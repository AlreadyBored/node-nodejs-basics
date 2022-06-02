import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const rs = fs.createReadStream(pathToFile);
    const ws = process.stdout;

    rs.pipe(ws);
};