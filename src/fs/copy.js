import { mkdir, readdir, copyFile, access } from 'fs/promises';
import { join } from 'path';

const copy = async () => {
    const sourceDir = './files';
    const destinationDir = './files_copy';

    try {
        try {
            await access(sourceDir);
        } catch (error) {
            throw new Error('FS operation failed');
        }
        try {
            await access(destinationDir);
            throw new Error('FS operation failed');
        } catch (error) {
        }
        await mkdir(destinationDir);
        const files = await readdir(sourceDir);
        for (const file of files) {
            const sourceFile = join(sourceDir, file);
            const destinationFile = join(destinationDir, file);
            await copyFile(sourceFile, destinationFile);
        }
        console.log('Files copied successfully.');
    } catch (error) {
        console.error(error.message);
    }
};

await copy();
