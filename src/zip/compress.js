import path from 'path';
import url from 'url';
import {createGzip} from 'zlib';
import {pipeline} from 'stream';
import fs from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToSourceFile = path.join(__dirname, './files/fileToCompress.txt');
const pathToTargetFile = path.join(__dirname, './files/archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const readStream = fs.createReadStream(pathToSourceFile);
    const writeStream = fs.createWriteStream(pathToTargetFile);

    pipeline([readStream, gzip, writeStream],
        (err) => {
            if (err) {
                process.exit(1);
            }
        });
};

await compress();