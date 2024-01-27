import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import {
    createReadStream,
    createWriteStream,
} from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const compressedFileName = 'archive.gz';
const decompressedFileName = 'fileToCompress.txt';
const input = createReadStream(path.join(__dirname, folderName, compressedFileName));
const output = createWriteStream(path.join(__dirname, folderName, decompressedFileName));

const decompress = async () => {
    try {
        const gunzip = createGunzip();

        await pipeline(input, gunzip, output);
    } catch (error) {
        throw new Error('UNZIP operation failed');
    }
};

await decompress();
