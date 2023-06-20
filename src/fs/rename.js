import fs from 'fs/promises';

const rename = async () => {
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    try {
        const isExists = async (path) => {
            try {
                await fs.access(path);
                return true;
            } catch (err) {
                return false;
            }
        };
        const res = await isExists(`./src/fs/files/${newFileName}`);
        if (res) {
            throw new Error('FS operation failed');
        }
        await fs.rename(
            `./src/fs/files/${oldFileName}`,
            `./src/fs/files/${newFileName}`
        );
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();