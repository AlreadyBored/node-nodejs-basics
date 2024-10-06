import path from "path";
import {createReadStream, createWriteStream,unlink} from "fs";
import {createGzip} from 'zlib'

const compress = async () => {
    const fileToCompressPath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
    const outputFile = path.join(import.meta.dirname, 'files', 'archive.gz');
    const readStream = createReadStream(fileToCompressPath);
    const gzip = createGzip();
    const writeStream = createWriteStream(outputFile);
    readStream.pipe(gzip).pipe(writeStream);

};

await compress();
