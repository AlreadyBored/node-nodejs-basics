import * as fs from "node:fs/promises";

export const rename = async () => {

    try {
        await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
            if (err) throw ('FS operation failed');
        });
    } catch (error) {
        throw Error('FS operation failed');
    }
};

rename();