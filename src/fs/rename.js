import * as fs from 'fs/promises';

export const rename = async () => {
    try {
        await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md')
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await rename();