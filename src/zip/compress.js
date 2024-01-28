import { fs, getFilePath } from '../utils/fs.js';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const fileToCompress = getFilePath(
    import.meta.url, 'files', 'fileToCompress.txt'
);
const archive = getFilePath(
    import.meta.url, 'files', 'archive.gz'
);

const compress = async () => {
    const gzip = createGzip();
    const readSteam = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(archive);
    pipeline(readSteam, gzip, writeStream, (err) => {
        if (err) throw err;
    });
};

await compress();