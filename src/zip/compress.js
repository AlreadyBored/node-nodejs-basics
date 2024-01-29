import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib'
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const compress = async () => {
    const txtPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToCompress.txt');
    const gzPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/archive.gz');

    const readStream = createReadStream(txtPath);
    const gzipStream = createGzip();
    const writeStream = createWriteStream(gzPath);

    await readStream.pipe(gzipStream).pipe(writeStream);

    console.log('Compress done');
};

await compress();
