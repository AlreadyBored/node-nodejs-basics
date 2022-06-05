import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

export const compress = async () => {
    const gzip = createGzip();
    const file_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
    const archive_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');
    const from = createReadStream(file_name);
    const to = createWriteStream(archive_name);
    await pipeline(from, gzip, to, (err) => {
        if (err) {
            throw new Error("wrong compression");
        }
    });
};

compress();


