import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
let Zlib =  zlib.createGzip();
const compress = async () => {
    let inStream = fs.createReadStream(FilePath);
    let outStream = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    let gZip = zlib.createGzip();
    inStream.pipe(gZip).pipe(outStream);
};

await compress();