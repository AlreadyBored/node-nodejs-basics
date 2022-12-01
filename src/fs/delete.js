import {unlink} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const remove = async () => {
    const fileName = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');
    const errorMessage = 'FS operation failed';

    return unlink(fileName).catch(() => { throw new Error(errorMessage); });
};

await remove();
