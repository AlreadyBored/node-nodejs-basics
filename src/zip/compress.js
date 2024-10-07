import zlib from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writePath = path.join(__dirname, 'files/archive.gz');
const readPath = path.join(__dirname, 'files/fileToCompress.txt');

const compress = async () => {
    try {
        const gzip = zlib.createGzip()
        const writeStream = createWriteStream(writePath)
        const readStream = createReadStream(readPath)

        readStream.pipe(gzip).pipe(writeStream)
    } catch (err) {
        console.log(err)
    }
};

await compress();