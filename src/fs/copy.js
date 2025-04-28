import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
    const files = path.join('files');
    const filesCopy = path.join('files_copy');

    try {
        await fs.access(files);

        try {
            await fs.access(filesCopy);

            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.mkdir(filesCopy);

        const entries = await fs.readdir(files, { withFileTypes: true });

        for (const entry of entries) {
            const sourcePath = path.join(files, entry.name);
            const destPath = path.join(filesCopy, entry.name);

            if (entry.isFile()) {
                await fs.copyFile(sourcePath, destPath);
            }
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

copy();
