import fs from 'fs/promises';

const list = async () => {
    const folderPath = 'src/fs/files';
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(folderPath);

        const folderFiles = await fs.readdir(folderPath);
        console.log(folderFiles);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await list();
