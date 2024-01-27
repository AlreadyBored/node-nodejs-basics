import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import {
    createReadStream,
    createWriteStream,
} from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const inputFileName = 'fileToCompress.txt';
const outFileName = 'archive.gz';
const input = createReadStream(path.join(__dirname, folderName, inputFileName));
const output = createWriteStream(path.join(__dirname, folderName, outFileName));

const compress = async () => {
    try {
        const gzip = createGzip();

        await pipeline(input, gzip, output);
    } catch (error) {
        throw new Error('ZIP operation failed')
    }
};

await compress();