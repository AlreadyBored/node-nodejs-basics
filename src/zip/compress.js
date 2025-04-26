import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//define files
const filePathToCompress=path.join(path.join(__dirname, 'files'), 'fileToCompress.txt');
const filePathArchive=path.join(path.join(__dirname, 'files'), 'archive.gz');

const compress = async () => {
    var gzip=zlib.createGzip();
    const rS=fs.createReadStream(filePathToCompress)
    const wZ=fs.createWriteStream(filePathArchive);
    rS.pipe(gzip).pipe(wZ);
};

await compress();