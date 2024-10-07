const fs = require('fs').promises;
const path = require('path');

const parseEnv = async () => {
    const sourceDir = path.join(__dirname, 'files');
    const targetDir = path.join(__dirname, 'files_copy');

    try {
        const sourceStats = await fs.stat(sourceDir);
        if (!sourceStats.isDirectory()) throw new Error('FS operation failed');

        await fs.stat(targetDir).catch(async () => {
            await fs.mkdir(targetDir);
        });

        const files = await fs.readdir(sourceDir);

        await Promise.all(files.map(file => {
            return fs.copyFile(path.join(sourceDir, file), path.join(targetDir, file));
        }));
    } catch (error) {
        console.error(error.message);
    }
};

parseEnv();
