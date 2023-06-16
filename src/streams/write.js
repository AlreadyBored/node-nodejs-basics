import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

import { getDirPath } from '../fs/utils.js';
import { FOLDER_NAME } from '../fs/constants.js';


const FILE_NAME = 'fileToWrite.txt';
const dirPath = getDirPath(import.meta.url);
const filePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const write = async () => {
    const fileWriteStream = createWriteStream(filePath);

    stdin.pipe(fileWriteStream);
};

await write();
