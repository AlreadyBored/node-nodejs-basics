import { stdout } from 'process';
import { createReadStream } from 'fs';
import { resolve } from 'path';

import { getDirPath } from '../fs/utils.js';
import { FOLDER_NAME } from '../fs/constants.js';



const FILE_NAME = 'fileToRead.txt';
const dirPath = getDirPath(import.meta.url);
const filePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const read = async () => {
    const fileReadStream = createReadStream(filePath);

    fileReadStream.pipe(stdout);
};

await read();
