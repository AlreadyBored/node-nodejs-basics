import { unlink } from 'node:fs/promises';

import { getPath } from '../../utils/get.path.js';
import { isFileExist } from '../../utils/is.file.exist.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const remove = async () => {
    const pathToFile = './files/fileToRemove.txt';
    const fullPathToFile = getPath(import.meta.url, pathToFile);

    try {
        const isFile = await isFileExist(fullPathToFile);

        if (!isFile) {
            throw new OperationFailedError();
        }

        await unlink(fullPathToFile);

    } catch (error) {
        throw new OperationFailedError();
    }
};

await remove();