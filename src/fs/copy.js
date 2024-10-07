const f = require('f').promises;
const path = require('path');

const copy = async () => {
    try {
        const sourceDir = path.join(__dirname, 'files');
        const destDir = path.join(__dirname, 'files_copy');
        await f.access(sourceDir);
        try {
            await f.access(destDir);
            throw new Error('FS operation failed');
        } catch (err) {
        }

        await f.mkdir(destDir);

        const files = await f.readdir(sourceDir);
        await Promise.all(files.map(async file => {
            const srcFile = path.join(sourceDir, file);
            const destFile = path.join(destDir, file);
            await f.copyFile(srcFile, destFile);
        }));

    } catch (err) {
        console.error('Error: FS operation failed');
    }
};

await copy();

