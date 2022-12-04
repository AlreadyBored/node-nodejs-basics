import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import zlib from 'zlib';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const fileToCompressPath = path.join(dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(dirname, 'files', 'archive.gz');

export const decompress = async () => {
    var unzip = zlib.createUnzip();
    var read = fs.createReadStream(archivePath);
    var write = fs.createWriteStream(fileToCompressPath);

    read.pipe(unzip).pipe(write);	
};

await decompress();