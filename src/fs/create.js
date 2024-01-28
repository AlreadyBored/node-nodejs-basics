import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const folderPath = 'src/fs/files';
    const filePath = path.join(folderPath, 'fresh.txt');
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(filePath);

        throw new Error(errorMessage);
    } catch (error) {
        if (error.message === errorMessage) {
            throw error;
        }

        await fs.writeFile(filePath, fileContent);
    }
};

await create();
