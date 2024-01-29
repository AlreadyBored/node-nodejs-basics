import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(fileToCompressPath);
    const writeStream = fs.createWriteStream(archivePath);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();