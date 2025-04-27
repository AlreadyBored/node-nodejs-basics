import { promises } from 'fs';
import { join } from 'path';

const copy = async () => {
    const sourceDir = join(import.meta.dirname, 'files');
    const destDir = join(import.meta.dirname, 'files_copy');

    try {
        const isSourceExist = await promises.access(sourceDir).then(() => true).catch(() => false);
        if (!isSourceExist) {
            throw new Error('FS operation failed');
        }

        const isDestExists = await promises.access(destDir).then(() => true).catch(() => false);
        if (isDestExists) {
            throw new Error('FS operation failed');
        }

        await promises.mkdir(destDir);

        const elements = await promises.readdir(sourceDir, { withFileTypes: true });
        for (const element of elements) {
            const sourcePath = join(sourceDir, element.name);
            const destPath = join(destDir, element.name);

            if (element.isDirectory()) {
                await promises.mkdir(destPath);
            } else if (element.isFile()) {
                await promises.copyFile(sourcePath, destPath);
            }
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
