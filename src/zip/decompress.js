import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

export const decompress = async () => {
    var unzip = zlib.createUnzip();

    var read = fs.createReadStream(archivePath);
    var write = fs.createWriteStream(fileToCompressPath);

    read.pipe(unzip).pipe(write);	
};