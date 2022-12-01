import {access, constants, rename as renameFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const rename = async () => {
    const baseDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const oldName = join(baseDir, 'wrongFilename.txt');
    const newName = join(baseDir, 'properFilename.md');
    const errorMessage = 'FS operation failed';

    return access(newName, constants.F_OK)
        .then(
            () => { throw new Error(); },
            () => renameFile(oldName, newName)
        )
        .catch(() => { throw new Error(errorMessage); })
};

await rename();
