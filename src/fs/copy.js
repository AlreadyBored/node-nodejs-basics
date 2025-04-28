import { access, cp } from 'fs/promises';
import { constants } from 'fs';

const copy = async () => {
    const sourceDir = 'files';
    const destDir = 'files_copy';

    try {
        await access(sourceDir, constants.F_OK);

        try {
            await access(destDir, constants.F_OK);

            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }

            await cp(sourceDir, destDir, { recursive: true });
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
