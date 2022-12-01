import { readdir } from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const list = async () => {
    const sourceDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const errorMessage = 'FS operation failed';

    return readdir(sourceDir)
        .then(
            (dirEntries) => dirEntries.forEach((e) => console.log(e)),
            () => { throw new Error(errorMessage); }
        );
};

await list();
