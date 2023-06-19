import fs from 'fs';
import zlib from 'zlib';
import {
    FILE_TO_COMPRESS,
    FILE_COMPRESSED, OPERATION_FAILED
} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';
import checkIfDirExists from "../utils/checkIfDirExists.js";

const compress = async () => {
    const filePathToCompress = getPath(import.meta.url, '/files/', FILE_TO_COMPRESS);
    const filePathCompressed = getPath(import.meta.url, '/files/', FILE_COMPRESSED);

    if (!await checkIfDirExists(filePathToCompress)) {
        throw new Error(OPERATION_FAILED);
    }

    return Promise.resolve(
        fs.createReadStream(filePathToCompress)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(filePathCompressed))
    );
};

await compress();