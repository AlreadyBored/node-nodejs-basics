import fs from 'fs';
import { createGzip } from 'zlib';

const filePath = new URL('files/fileToCompress.txt', import.meta.url);
const compressedFilePath = new URL('files/archive.gz', import.meta.url);
const compress = async () => {
    // Write your code here 
    const fileStream = fs.createReadStream(filePath);
    const gzipStream = createGzip();

    fileStream.pipe(gzipStream).pipe(fs.createWriteStream(compressedFilePath));
};

await compress();