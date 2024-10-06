import {createReadStream, createWriteStream} from "fs";
import {createGunzip} from 'zlib';
import path from "path";
const decompress = async () => {
    const fileDecompressPath = path.join(import.meta.dirname, 'files', 'archive.gz');
    const outputFile = path.join(import.meta.dirname, 'files', 'fileToCompressDecompressed.txt');
    const readStream = createReadStream(fileDecompressPath);
    const gunzip = createGunzip();
    const writeStream = createWriteStream(outputFile);
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
