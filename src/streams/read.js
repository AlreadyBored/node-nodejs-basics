import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(path.join(__dirname, 'files'), 'fileToRead.txt');

const read = async () => {
     const rS=fs.createReadStream(filePath);
     rS.pipe(stdout);
};

await read();