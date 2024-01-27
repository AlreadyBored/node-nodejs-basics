import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'archive.gz';
    const newFileName = 'fileToCompress.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    const newFilePath = path.join(__dirname, 'files', newFileName)
    const contentForStreamDecompress = createReadStream(filePath)
    const newWriteStream = createWriteStream(newFilePath)
    try {
        await pipeline(
            contentForStreamDecompress,
            createGunzip(),
            newWriteStream,
        );
        console.log('Pipeline succeeded.');
    } catch (error) {
        throw new Error('Pipeline failed')
    }
};

await decompress();




