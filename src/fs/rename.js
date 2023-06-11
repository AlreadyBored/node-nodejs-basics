import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';
import { existsSync } from 'node:fs'
import { rename  as renameFile } from 'node:fs/promises'

const rename = async () => {
    const errorMessage = 'FS operation failed';
    const fileToRename = '/files/wrongFilename.txt';
    const newFileName = '/files/properFilename.md';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const isFileExist = existsSync(`${__dirname}${fileToRename}`);
    const isNewFileExist = existsSync(`${__dirname}${newFileName}`);

    if (!isFileExist || isNewFileExist) {
        throw new Error(errorMessage);
    }

    try {
        await renameFile(`${__dirname}${fileToRename}`, `${__dirname}${newFileName}`)
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await rename();
