import { isTargetAccessible } from "./helpers/helperFunctions.js";
import { rename as renameFile } from 'node:fs/promises';

const rename = async (targetFile, fileWithNewName) => {
    const [
        isTargetFileExists,
        isFileWithNewNameExist,
    ] = await Promise.all([
        isTargetAccessible(targetFile),
        isTargetAccessible(fileWithNewName),
    ]);

    if (isTargetFileExists && !isFileWithNewNameExist) {
        await renameFile(targetFile, fileWithNewName);
        console.log('SUCCESSFULLY RENAMED');
    } else {
        throw new Error('FS operation failed');
    }
};

await rename('./files/wrongFilename.txt', './files/wrongFilename.md');
