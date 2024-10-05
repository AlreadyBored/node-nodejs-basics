import { access, rename as renameFile } from 'fs/promises';
import path from "path";

const rename = async () => {
    const oldFile = path.join(process.cwd(), 'src/fs/files/wrongFilename.txt');
    const newFile = path.join(process.cwd(), 'src/fs/files/properFilename.md');

    try {
        await access(oldFile)
    } catch (error) {
        throw Error('FS operation failed');
    }

    try {
        await access(newFile)
        throw Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    renameFile(oldFile, newFile);
};

await rename();