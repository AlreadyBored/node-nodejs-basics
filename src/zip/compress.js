import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream/promises';
import path from 'path';

const compress = async () => {
    const folderPath = 'src/zip/files';
    const inputFilePath = path.join(folderPath, 'fileToCompress.txt');
    const outputFilePath = path.join(folderPath, 'archive.gz');

    try {
        await stream.pipeline(
            fs.createReadStream(inputFilePath),
            zlib.createGzip(),
            fs.createWriteStream(outputFilePath),
        );
    } catch (error) {
        throw error;
    }
};

await compress();
