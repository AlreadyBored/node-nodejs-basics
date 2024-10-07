import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compress = async () => {
    const inputFile = path.join(dirname, 'files', 'fileToCompress.txt');
    const outputFile = path.join(dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const gzip = zlib.createGzip();

    pipeline(
        readStream,
        gzip,
        writeStream,
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Файл успешно сжат');
            }
        }
    );
};

await compress();
