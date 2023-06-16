import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import fs from 'fs';
import path from 'path';
import url from 'url'


const compress = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const srcFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destFile = path.join(__dirname, 'files', 'archive.gz')
    const src = fs.createReadStream(srcFile);
    const dest = fs.createWriteStream(destFile);
    const gzip = createGzip();

    pipeline(src, gzip, dest, (err) => {
        if (err) {
            console.error('Произошла ошибка:', err);
            process.exit(1);
        }
    });
};

await compress();