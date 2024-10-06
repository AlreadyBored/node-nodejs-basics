import { createReadStream, createWriteStream, unlink } from 'fs';
import path from "path";
import { createGzip } from 'zlib';

const compress = async () => {
    const inputFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');
    const outputFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');

    const inputStream = createReadStream(inputFilePath);
    const outputStream = createWriteStream(outputFilePath);

    const gzip = createGzip();
  
    inputStream
        .pipe(gzip)
        .pipe(outputStream)
        .on('finish', () => {
            unlink(inputFilePath, (err) => {
                if (err) {
                    console.error(err);
                }
            });
    });
};

await compress();