import { access, constants, mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceFolderPath = path.join(__dirname, 'files');
    const destinationFolderPath = path.join(__dirname, 'files_copy');

    try {
        // Check if the source folder exists
        await access(sourceFolderPath, constants.F_OK);

        // Check if the destination folder already exists
        try {
            await access(destinationFolderPath, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (error) {
            // Destination folder doesn't exist, proceed with copying
            if (error.code === 'ENOENT') {
                await mkdir(destinationFolderPath);

                // Read the files in the source folder
                const files = await readdir(sourceFolderPath);

                // Copy each file to the destination folder
                await Promise.all(
                    files.map(async (file) => {
                        const sourceFilePath = path.join(sourceFolderPath, file);
                        const destinationFilePath = path.join(destinationFolderPath, file);

                        // Copy the file
                        await copyFile(sourceFilePath, destinationFilePath);
                    })
                );

                console.log('Folder "files" copied successfully!');
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
