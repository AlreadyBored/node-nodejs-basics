import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from "fs";

const decompress = async () => {
    const gzip = createUnzip();
    const sourceFile = createReadStream('src/zip/files/archive.gz');
    const destinationFile = createWriteStream('src/zip/files/fileToCompress.txt');
    sourceFile.pipe(gzip).pipe(destinationFile)
};

await decompress();