import fs from 'fs';
import zlib from 'zlib';
import {
    FILE_COMPRESSED,
    FILE_TO_COMPRESS
} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const decompress = async () => {
    const filePathToDecompress = getPath(import.meta.url, '/files/', FILE_COMPRESSED);
    const filePathDecompressed = getPath(import.meta.url, '/files/', FILE_TO_COMPRESS);

    return Promise.resolve(
        fs.createReadStream(filePathToDecompress)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filePathDecompressed))
    );
};

await decompress();