import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    const source = createReadStream(archivePath);
    const gzip = createUnzip();
    const destination = createWriteStream(filePath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await decompress();