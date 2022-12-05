import { rename as renameFs } from 'node:fs/promises';
import { existsSync }         from "fs";

const rename = async () => {
    try {
        const currentFilePath = new URL('files/wrongFilename.txt', import.meta.url);
        const newFilePath     = new URL('files/properFilename.md', import.meta.url);
        if (!existsSync(currentFilePath) || existsSync(newFilePath)) {
            throw new Error('FS operation failed');
        };
        renameFs(currentFilePath, newFilePath);
    } catch (error) {
        console.log(error.message)
    }
};

await rename();