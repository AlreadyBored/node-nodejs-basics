import { readFile } from 'node:fs/promises';

import { getPath } from '../../utils/get.path.js';
import { isFileExist } from '../../utils/is.file.exist.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const read = async () => {
    const pathToFile = './files/fileToRead.txt';
    const fullPathToFile = getPath(import.meta.url, pathToFile);

    try {
        const isFile = await isFileExist(fullPathToFile);

        if (!isFile) {
            throw new OperationFailedError();
        }

        const fileContent = await readFile(fullPathToFile, 'utf8');
        console.log('File content:', fileContent);

    } catch (error) {
        throw new OperationFailedError();
    }
};

await read();