import { promises as fs, access } from 'fs';

const rename = async () => {
    try {
        await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
        console.log('File renamed successfully');

    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();