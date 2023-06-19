import zlib from 'zlib';
import fs from 'fs'; 

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const zipPath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {      
    const input = fs.createReadStream(filePath);  
    const output = fs.createWriteStream(zipPath);  
    input.pipe(zlib.createGzip()).pipe(output);
};

await compress();