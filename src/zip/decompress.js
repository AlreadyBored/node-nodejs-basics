import { resolve } from 'node:path';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

import { getDirPath } from '../fs/utils.js';
import { FOLDER_NAME } from '../fs/constants.js';


const SOURCE_FILE_NAME = 'archive.gz';
const TARGET_FILE_NAME = 'fileToCompress.txt';

const dirPath = getDirPath(import.meta.url);
const sourceFilePath = resolve(dirPath, FOLDER_NAME, SOURCE_FILE_NAME);
const targetFilePath = resolve(dirPath, FOLDER_NAME, TARGET_FILE_NAME);

const pipe = promisify(pipeline);

const decompress = async () => {
    const unzip = createUnzip();
    const sourceStream = createReadStream(sourceFilePath);
    const targetStream = createWriteStream(targetFilePath);

    await pipe(sourceStream, unzip, targetStream);
};

await decompress();
