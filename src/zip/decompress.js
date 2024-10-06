import { createReadStream, createWriteStream, unlink } from 'fs';
import path from "path";
import { createGunzip } from 'zlib';

const decompress = async () => {
    const inputFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');
    const outputFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');

    return new Promise((resolve, reject) => {
        const inputStream = createReadStream(inputFilePath);
        const outputStream = createWriteStream(outputFilePath);
        const gunzip = createGunzip();

        inputStream
            .pipe(gunzip)
            .pipe(outputStream)
            .on('finish', () => {
                unlink(inputFilePath, (err) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            })
    });
};

await decompress();