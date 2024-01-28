import { mkdir, access, constants, cp } from 'node:fs/promises';

import { OperationFailedError } from '../../utils/operation.failed.error.js';
import { getPath } from '../../utils/get.path.js';

const copy = async () => {
    try {
        const pathToFile = getPath(import.meta.url, './files');
        const pathToCopyFile = getPath(import.meta.url, './files_copy');

        await access(pathToFile, constants.R_OK);
        await mkdir(pathToCopyFile, { recursive: false });
        await cp(pathToFile, pathToCopyFile, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });


    } catch (error) {
        throw new OperationFailedError();
    }
};

await copy();
