import { createReadStream, createWriteStream } from 'node:fs'
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'node:path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    try {
        const pathToSourceFile = path.join(__dirname, 'files','fileToCompress.txt');
        const pathToTargetFile = path.join(__dirname, 'files','archive.gz');
        const readStream = createReadStream(pathToSourceFile);
        const writeStream = createWriteStream(pathToTargetFile);
        const gzipStream = zlib.createGzip();

        readStream.pipe(gzipStream).pipe(writeStream);
    } catch (e) {
        console.log(e);
    }
};

await compress();
