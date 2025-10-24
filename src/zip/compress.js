import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);

    const sourceFileName = 'fileToCompress.txt';
    const sourceFile = join(_dirname, 'files', sourceFileName);

    const archiveFileName = 'archive.gz';
    const archiveFile = join(_dirname, 'files', archiveFileName);

    return new Promise((resolve, reject) => {
        const readStrm = createReadStream(sourceFile);
        const writeStrm = createWriteStream(archiveFile);
        const gzip = createGzip();

        let tBytes = 0;
        let comprBytes = 0;

        readStrm.on('data', (chunk) => {
            tBytes += chunk.length;
        });

        writeStrm.on('data', (chunk) => {
            comprBytes += chunk.length;
        });

        readStrm
            .pipe(gzip)
            .pipe(writeStrm)
            .on('finish', () => {
                console.log(`Compress finished!`);
                console.log(`1st size: ${tBytes} bytes`);
                console.log(`After compressing: ${comprBytes} bytes`);
                resolve();
            })
            .on('error', (error) => {
                console.error('Error:', error.message);
                reject(error);
            });
    });
};

await compress();