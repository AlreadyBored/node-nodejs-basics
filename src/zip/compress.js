import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from "fs";

const compress = async () => {
    const gzip = createGzip();
    const sourceFile = createReadStream('src/zip/files/fileToCompress.txt');
    const destinationFile = createWriteStream('src/zip/files/archive.gz');
    sourceFile.pipe(gzip).pipe(destinationFile)
};

await compress();