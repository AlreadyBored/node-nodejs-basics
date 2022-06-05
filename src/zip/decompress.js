import fs from 'fs';
import zlib from "zlib";
export const decompress = async () => {
    const unzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const readStream = fs.createReadStream('./files/archive.gz');
    readStream.pipe(unzip).pipe(writeStream);
};
decompress();