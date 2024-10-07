import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'archive.gz');
let Zlib =  zlib.createGzip();
const decompress = async () => {
    let inStream = fs.createReadStream(FilePath);
    let outStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    let gUnZip = zlib.createGunzip();
    inStream.pipe(gUnZip).pipe(outStream)
};

await decompress();