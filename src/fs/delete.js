import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
    const folderPath = 'src/fs/files';
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(folderPath, fileName);
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();
