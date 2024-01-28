import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const folderPath = 'src/fs/files';
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const oldFilePath = path.join(folderPath, oldFileName);
    const newFilePath = path.join(folderPath, newFileName);
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(oldFilePath);

        try {
            await fs.access(newFilePath);

            throw new Error(errorMessage);
        } catch (error) {
            if (error.message === errorMessage) {
                throw error;
            }

            await fs.rename(oldFilePath, newFilePath)
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await rename();
