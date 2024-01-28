import { readdir } from 'node:fs/promises';

import { getPath } from '../../utils/get.path.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const list = async () => {
    const pathToFolder = './files';
    const fullPath = getPath(import.meta.url, pathToFolder);

    try {
        const filesNamesArray = await readdir(fullPath, { withFileTypes: true });
        const fileNames = filesNamesArray.filter(fileName => fileName.isFile());

        for (const fileName of fileNames) {
            console.log('Name:', fileName.name);
        }
    } catch (error) {
        throw new OperationFailedError();
    }
};

await list();