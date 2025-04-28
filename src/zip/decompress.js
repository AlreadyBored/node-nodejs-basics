import zlib from 'zlib';
import { pipeline } from 'stream';
import  path from 'path';
import  fs from 'fs';
const decompress = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const zipPath = path.join(import.meta.dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(zipPath);  // Поток для чтения исходного файла
    const writeStream = fs.createWriteStream(filePath);
    const decompressStream = zlib.createGunzip();

    pipeline(
        readStream,
        decompressStream,
        writeStream,
        (err) => {}
    );
};

await decompress();