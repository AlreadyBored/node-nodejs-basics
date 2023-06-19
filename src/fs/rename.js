import { rename, access } from 'fs/promises';
const rename = async () => {
    const sourceFile = './wrongFilename.txt';
    const destinationFile = './properFilename.md';

    try {
        try {
            await access(sourceFile);
        } catch (error) {
            throw new Error('FS operation failed');
        }
        try {
            await access(destinationFile);
            throw new Error('FS operation failed');
        } catch (error) {
        }
        await rename(sourceFile, destinationFile);
        console.log('File renamed successfully.');
    } catch (error) {
        console.error(error.message);
    }
};

await rename();
