import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from 'zlib';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const fileToCompressPath = path.join(dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(dirname, 'files', 'archive.gz');

export const compress = async () => {
    var zip = zlib.createGzip();
    
    var read = fs.createReadStream(fileToCompressPath);
    var write = fs.createWriteStream(archivePath);

    read.pipe(zip).pipe(write);	
};

await compress();