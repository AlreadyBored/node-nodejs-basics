import { rename as fsRename } from 'node:fs/promises';

import { getPath } from '../../utils/get.path.js';
import { isFileExist } from '../../utils/is.file.exist.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const rename = async () => {
    const wrongFileName = getPath(import.meta.url, './files/wrongFilename.txt');
    const rightFileName = getPath(import.meta.url, './files/properFilename.md');

    try {
        const isFile = await isFileExist(wrongFileName);

        if (!isFile) {
            throw new OperationFailedError();
        }

        await fsRename(wrongFileName, rightFileName);

    } catch (error) {
        throw new OperationFailedError();
    }
};

await rename();