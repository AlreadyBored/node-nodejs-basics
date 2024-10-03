import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fileReadPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fileWritePath = path.join(__dirname, 'files', 'archive.gz');

    if (!fs.existsSync(fileReadPath)) {
        throw new Error('Operation failed');
    }

    const gzip = createGzip();
    const readStream = fs.createReadStream(fileReadPath);
    const writeStream = fs.createWriteStream(fileWritePath);

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            throw new Error('Operation failed');
        }
        fs.unlink(fileReadPath, () => {})
    });
};

await compress();
