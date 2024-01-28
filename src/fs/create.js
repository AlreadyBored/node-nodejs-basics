import { writeFile } from 'node:fs/promises';

import { getPath } from '../../utils/get.path.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const create = async () => {
    const filePathWithFilesName = './files/fresh.txt';
    const textValue = 'I am fresh and young';
    const fullPath = getPath(import.meta.url, filePathWithFilesName);

    try {
        await writeFile(fullPath, textValue, { flag: 'wx' });
    } catch (err) {
        throw new OperationFailedError();
    }
};

await create();