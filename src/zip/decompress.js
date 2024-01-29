import {createGunzip} from 'zlib';
import * as fs from 'fs';

const decompress = async () => {
    const gunzip = createGunzip();
    const readableStream = fs.createReadStream('src/zip/files/archive.gz');
    const writableStream = fs.createWriteStream('src/zip/files/fileToCompress.txt');

    readableStream.pipe(gunzip).pipe(writableStream);
};

await decompress();