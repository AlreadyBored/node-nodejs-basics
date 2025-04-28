import { rename as fsRename, access } from 'fs/promises';
import { constants } from 'fs';

const rename = async () => {
    const sourcePath = 'files/wrongFilename.txt';
    const destPath = 'files/properFilename.md';

    try {
        await access(sourcePath, constants.F_OK);

        try {
            await access(destPath, constants.F_OK);

            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }

            await fsRename(sourcePath, destPath);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();