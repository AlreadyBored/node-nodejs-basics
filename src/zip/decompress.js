import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files/archive.gz'));
    const writebleStream = fs.createWriteStream(path.join(__dirname, 'files/fileToCompress.txt'), 'utf-8');
    readableStream.pipe(zlib.createUnzip()).pipe(writebleStream);
};

await decompress();