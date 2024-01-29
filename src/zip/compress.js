import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import {pipeline} from 'stream';
const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const gzip = zlib.createGzip();
    const StreamForRead = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));
    const StreamForWrite = fs.createWriteStream(path.resolve(__dirname, 'files', 'archive.gz'));
    pipeline(StreamForRead, gzip, StreamForWrite, (err) => {
        if (err) {
            console.log(err);
        }
    });
};

await compress();