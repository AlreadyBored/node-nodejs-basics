import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const source = createReadStream(filePath);
    const gzip = createGzip();
    const destination = createWriteStream(archivePath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await compress();