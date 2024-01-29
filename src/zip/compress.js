import {createGzip} from 'zlib';
import * as fs from 'fs';

const compress = async () => {
    const gzip = createGzip();
    const readableStream = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const writableStream = fs.createWriteStream('src/zip/files/archive.gz');

    readableStream.pipe(gzip).pipe(writableStream);
};

await compress();