import {writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const create = async () => {
    const fileName = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt');
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    return writeFile(fileName, fileContent, {flag: 'wx'}).catch((err) => {
        if (err.code === 'EEXIST') {
            throw new Error(errorMessage);
        }
    });
};

await create();
