import fs from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';

const folder = 'src/zip/files';
const fileName = 'fileToCompress.txt';
const archiveName = 'archive.gz';

export const decompress = async () => {
    const gzip = createGunzip();
    const readStream = fs.createReadStream(path.join(folder, archiveName));
    const writeStream = fs.createWriteStream(path.join(folder, fileName));
    readStream.pipe(gzip).pipe(writeStream);
};
decompress();