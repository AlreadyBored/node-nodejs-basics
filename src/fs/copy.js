import { access, mkdir, readdir, copyFile, constants } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
    const destinationFolder = join('src', 'fs', 'files_copy');
    const sourceFolder = join('src', 'fs', 'files');

    try {
        await access(sourceFolder, constants.R_OK);

        try {
            await access(destinationFolder, constants.R_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                await mkdir(destinationFolder, { recursive: true });

                const files = await readdir(sourceFolder);
                for (const file of files) {
                    const sourceFile = join(sourceFolder, file);
                    const destinationFile = join(destinationFolder, file);
                    try {
                        await copyFile(sourceFile, destinationFile, constants.COPYFILE_EXCL);
                    } catch {
                        throw new Error('FS operation failed');
                    }
                }
            } else {
                throw new Error('FS operation failed');
            }
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
