import zlib from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writePath = path.join(__dirname, 'files/fileToCompress.txt');
const readPath = path.join(__dirname, 'files/archive.gz');

const decompress = async () => {
    try {
        const unzip = zlib.createUnzip()
        const writeStream = createWriteStream(writePath)
        const readStream = createReadStream(readPath)

        readStream.pipe(unzip).pipe(writeStream)
    } catch (err) {
        console.log(err)
    }
};

await decompress();