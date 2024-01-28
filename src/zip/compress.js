import fs from 'fs';
import { promises as fsAsync } from 'fs';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
    try {
        const inputFilePath = path.join('src', 'zip', 'files', 'fileToCompress.txt');
        const outputFilePath = path.join('src', 'zip', 'files', 'archive.gz');

        try {
            await fsAsync.access(outputFilePath);
            throw new Error('Output file already exists.');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }

            const readStream = fs.createReadStream(inputFilePath);
            const writeStream = fs.createWriteStream(outputFilePath);
            const gzip = zlib.createGzip();

            readStream.pipe(gzip).pipe(writeStream);

            writeStream.on('finish', () => {
                console.log('File compression completed.');
            });
        }
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
};

await compress();