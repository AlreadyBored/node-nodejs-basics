import { createHash } from 'crypto';
import { open } from 'fs/promises';
import { resolve } from 'path';

import { getDirPath } from '../fs/utils.js';
import { FOLDER_NAME } from '../fs/constants.js';


const FILE_NAME = 'fileToCalculateHashFor.txt';
const ALGORITHM = 'sha256';
const ENCODING = 'hex';

const dirPath = getDirPath(import.meta.url);
const filePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const calculateHash = async () => {
    const hash = createHash(ALGORITHM);

    const file = await open(filePath);
    const fileBuffer = await file.readFile();

    const fileHash = await hash.update(fileBuffer);
    const fileHashInHex = fileHash.digest(ENCODING);

    console.log(fileHashInHex);
};

await calculateHash();
