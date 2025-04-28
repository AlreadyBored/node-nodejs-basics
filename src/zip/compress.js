import zlib from 'zlib';
import { pipeline } from 'stream';
import  path from 'path';
import  fs from 'fs';
const compress = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const zipPath = path.join(import.meta.dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(filePath);  // Поток для чтения исходного файла
    const writeStream = fs.createWriteStream(zipPath);
    const compressStream = zlib.createGzip();

    pipeline(
        readStream,
        compressStream,
        writeStream,
        (err) => {}
    );
};

await compress();