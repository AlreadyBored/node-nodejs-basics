import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';
import { isTargetAccessible } from "../fs/helpers/helperFunctions.js";

const decompress = async (fileToDecompress, unzipFileName) => {
    const isArchiveExist = isTargetAccessible(fileToDecompress);
    const isUnzipFileExist = isTargetAccessible(fileToDecompress);

    const gunzip = zlib.createGunzip();

    if (isArchiveExist && !isUnzipFileExist) {
        const readStream = createReadStream(fileToDecompress);
        const writeStream = createWriteStream(unzipFileName);

        readStream.pipe(gunzip).pipe(writeStream);
    } else if (isArchiveExist && isUnzipFileExist) {
        const readStream = createReadStream(fileToDecompress);
        const writeStream = createWriteStream(`${unzipFileName}_copy_${Date.now()}`);

        readStream.pipe(gunzip).pipe(writeStream);
    } else {
        throw new Error('CAN NOT DECOMPRESS');
    }
};

await decompress('./files/archive.gz', './files/fileToCompress.txt');
