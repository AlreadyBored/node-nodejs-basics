import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files/fileToCompress.txt'), 'utf-8');
    const writebleStream = fs.createWriteStream(path.join(__dirname, 'files/archive.gz'));
    readableStream.pipe(zlib.createGzip()).pipe(writebleStream);
};

await compress();