import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {

    const readStream = fs.createReadStream('./src/zip/files/archive.gz');
    const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
    const gzip = zlib.createGunzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();


