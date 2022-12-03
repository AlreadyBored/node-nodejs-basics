import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';
import { isTargetAccessible } from "../fs/helpers/helperFunctions.js";

const compress = async (fileToCompress, zipFileName) => {
    const isFileExist = isTargetAccessible(fileToCompress);

    if (isFileExist) {
        const readStream = createReadStream(fileToCompress);
        const writeStream = createWriteStream(zipFileName);
        const gzip = zlib.createGzip();

        readStream.pipe(gzip).pipe(writeStream);
    } else {
        throw new Error(`Target file doesn't exist`);
    }
};

await compress('./files/fileToCompress.txt','./files/archive.gz');
