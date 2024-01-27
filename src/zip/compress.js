import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fileToCompress.txt';
    const newFileName = 'archive.gz';
    const filePath = path.join(__dirname, 'files', fileName);
    const newFilePath = path.join(__dirname, 'files', newFileName)
    const contentForStreamCompress = createReadStream(filePath)
    const newWriteStream = createWriteStream(newFilePath)
    try {
        await pipeline(
            contentForStreamCompress,
            createGzip(),
            newWriteStream,
        );
        console.log('Pipeline succeeded.');
    } catch (error) {
        throw new Error(`Pipeline failed. ${error.message}`)
    }
};

await compress();




