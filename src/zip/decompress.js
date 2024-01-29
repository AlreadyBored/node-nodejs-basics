import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const gzPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/archive.gz');
    const txtPath = getNecessaryPathInCurrentDir(import.meta.url, '/files/decompressedFile.txt');

    const readStream = createReadStream(gzPath);
    const gunzipStream = createGunzip();
    const writeStream = createWriteStream(txtPath);

    await readStream.pipe(gunzipStream).pipe(writeStream);

    console.log('Decompress done');
};

await decompress();
