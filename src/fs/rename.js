import { rename as renameFile, access } from 'node:fs/promises'

const rename = async () => {
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath = './src/fs/files/properFilename.md';

    try {
        await access(oldPath);
        await renameFile(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed'); 
    }
};

await rename();