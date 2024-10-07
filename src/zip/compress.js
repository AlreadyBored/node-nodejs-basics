import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {

    const file = path.join(__dirname, 'files','fileToCompress.txt');
    const archive = path.join(__dirname, 'files','archive.gz');


    //
    // const read = fs.createReadStream(file);
    // const write = fs.createWriteStream(archive);
    // const zip = zlib.createGzip();
    //
    // read.pipe(zip).pipe(write);
};

await compress();