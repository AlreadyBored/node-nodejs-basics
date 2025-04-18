import fs from 'fs'; 
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
const compress = async () => {
    const gzip = zlib.createGzip();
    const src = fs.createReadStream('src/zip/files/fileToCompress.txt')
    const dest = fs.createWriteStream("src/zip/files/archive.gz")
    await pipeline(src, gzip, dest)
};

await compress();