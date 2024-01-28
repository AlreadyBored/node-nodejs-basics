import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';

import { getPath } from '../../utils/get.path.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const calculateHash = async () => {
    const pathToFile = getPath(import.meta.url, './files/fileToCalculateHashFor.txt');

    try {
        const fileContent = await readFile(pathToFile);
        const hash = createHash('sha256').update(fileContent).digest('hex');
        console.log(hash);
    } catch (error) {
        throw new OperationFailedError();
    }
};

await calculateHash();