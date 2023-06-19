import path from 'path';
import url from 'url';
import {createGunzip} from 'zlib';
import {pipeline} from 'stream';
import {createWriteStream, createReadStream} from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToSourceFile = path.join(__dirname, './files/archive.gz');
const pathToTargetFile = path.join(__dirname, './files/fileToCompress2.txt');

const decompress = async () => {
    const unzip = createGunzip();
    const readStream = createReadStream(pathToSourceFile);
    const writeStream = createWriteStream(pathToTargetFile);

    pipeline([readStream, unzip, writeStream],
        (err) => {
            if (err) {
                process.exit(1);
            }
        });
};

await decompress();