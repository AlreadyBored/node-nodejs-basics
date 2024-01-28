import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const sourcePath = path.join('files');
    const destinationPath = path.join('files_copy');

    try {
        await fs.access(sourcePath);
        await fs.access(destinationPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            if (err.path === sourcePath) {
                throw new Error('FS operation failed');
            } else {
                await fs.mkdir(destinationPath);
                const files = await fs.readdir(sourcePath);
                await Promise.all(files.map(file =>
                    fs.copyFile(path.join(sourcePath, file), path.join(destinationPath, file))
                ));
            }
        } else {
            throw err;
        }
    }
};

await copy();
