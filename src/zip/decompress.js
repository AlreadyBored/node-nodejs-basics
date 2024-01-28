import { fs, getFilePath } from '../utils/fs.js';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const fileToCompress = getFilePath(
    import.meta.url, 'files', 'fileToCompress.txt'
);
const archive = getFilePath(
    import.meta.url, 'files', 'archive.gz'
);

const decompress = async () => {
    const unzip = createUnzip();
    const readSteam = fs.createReadStream(archive);
    const writeStream = fs.createWriteStream(fileToCompress);

    pipeline(readSteam, unzip, writeStream, (err) => {
        if (err) throw err;
    });
};

await decompress();