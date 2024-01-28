import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const sourceFolderPath = 'src/fs/files';
    const destinationFolderPath = 'src/fs/files_copy';
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(sourceFolderPath);

        try {
            await fs.access(destinationFolderPath);

            throw new Error(errorMessage);
        } catch (error) {
            if (error.message === errorMessage) {
                throw error;
            }

            await fs.mkdir(destinationFolderPath);

            const files = await fs.readdir(sourceFolderPath);
            for (const file of files) {
                const sourceFilePath = path.join(sourceFolderPath, file);
                const destinationFilePath = path.join(destinationFolderPath, file);

                await fs.copyFile(sourceFilePath, destinationFilePath);
            }
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await copy();

