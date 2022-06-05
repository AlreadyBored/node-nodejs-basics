import fs from 'fs';
import { createGzip } from 'zlib';
import path from 'path';

const folder = 'src/zip/files';
const fileName = 'fileToCompress.txt';
const archiveName = 'archive.gz';

export const compress = async () => {
    const gzip = createGzip();
    const readStream = fs.createReadStream(path.join(folder, fileName));
    const writeStream = fs.createWriteStream(path.join(folder, archiveName));
    readStream.pipe(gzip).pipe(writeStream);
};
compress();