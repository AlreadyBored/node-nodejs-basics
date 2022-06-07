import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
    var zip = zlib.createGzip();
    
    var read = fs.createReadStream(fileToCompressPath);
    var write = fs.createWriteStream(archivePath);

    read.pipe(zip).pipe(write);	
};

compress();