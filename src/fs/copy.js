const fs = require('fs');
const path = require('path');

const copy = async () => {
    // Write your code here 
    const MainFolderPath = path.join(__dirname, 'files');
    const CopyFolderPath = path.join(__dirname, 'files_copy');

    try {
        await fs.access(MainFolderPath);

        try {
            await fs.access(CopyFolderPath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.mkdir(CopyFolderPath);

                const files = await fs.readdir(MainFolderPath);

                await Promise.all(files.map(async (file) => {
                    const sourceFilePath = path.join(MainFolderPath, file);
                    const destinationFilePath = path.join(CopyFolderPath, file);
                    await fs.copyFile(sourceFilePath, destinationFilePath);
                }));

                console.log('Folder copied successfully: files -> files_copy');
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('main folder does not exist');
    }
};

await copy();
