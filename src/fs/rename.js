import fs from 'fs';
import path from 'path';

const rename = async () => {
    // Write your code here 
    const MainFilePath = path.join("files", 'wrongFilename.txt');
    const destinationFilePath = path.join("files", 'properFilename.md');

    try {
        await fs.promises.access(MainFilePath);

        try {
            await fs.promises.access(destinationFilePath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.promises.rename(MainFilePath, destinationFilePath);
                console.log('File renamed successfully: wrongFilename.txt -> properFilename.md');
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();