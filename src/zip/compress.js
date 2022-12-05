import fs from 'node:fs';
import path from 'path'
import zlib from 'node:zlib';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compress = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToCompress.txt');
    const writeStream = path.join(dirname, 'files', 'archive.gz');
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(filenamePath);
    const destination = fs.createWriteStream(writeStream);

    source.pipe(gzip).pipe(destination);
};

await compress();