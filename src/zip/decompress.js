import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream/promises';
import path from 'path';

const decompress = async () => {
    const folderPath = 'src/zip/files';
    const inputFilePath = path.join(folderPath, 'archive.gz');
    const outputFilePath = path.join(folderPath, 'fileToCompress.txt');

    try {
        await stream.pipeline(
            fs.createReadStream(inputFilePath),
            zlib.createGunzip(),
            fs.createWriteStream(outputFilePath),
        );
    } catch (error) {
        throw error;
    }
};

await decompress();
