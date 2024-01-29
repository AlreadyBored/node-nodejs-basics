import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 
    const MainFolderPath = path.join(__dirname, 'files');
    const CopyFolderPath = path.join(__dirname, 'files_copy');

    try {
        await fs.promises.access(MainFolderPath);

        try {
            await fs.promises.access(CopyFolderPath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.promises.mkdir(CopyFolderPath);

                const files = await fs.promises.readdir(MainFolderPath);

                await Promise.all(files.map(async (file) => {
                    const sourceFilePath = path.join(MainFolderPath, file);
                    const destinationFilePath = path.join(CopyFolderPath, file);
                    await fs.promises.copyFile(sourceFilePath, destinationFilePath);
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
