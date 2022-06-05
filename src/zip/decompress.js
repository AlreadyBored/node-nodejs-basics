import { createGzip} from 'zlib';
import { pipeline } from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

export const decompress = async () => {
    const gzip = createGzip();
    const file_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
    const archive_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');
    const to = createWriteStream(file_name);
    const from = createReadStream(archive_name);
    await pipeline(from, gzip, to, (err) => {
        console.log(gzip);
        if (err) {
            throw new Error("wrong compression");
        }
    });
};

decompress();
