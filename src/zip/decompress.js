import { createReadStream, createWriteStream } from 'node:fs'
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import path from 'node:path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const decompress = async () => {
    try {
        const sourceFilePath = path.join(__dirname, 'files', 'archive.gz');
        const targetFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
        const readStream = createReadStream(sourceFilePath);
        const writeStream = createWriteStream(targetFilePath);
        const gunzip = zlib.createGunzip();

        readStream.pipe(gunzip).pipe(writeStream);
        readStream.on('end', () => {
            console.log('done')
        })
    } catch (e) {
        console.error(e)
    }
};

await decompress();
