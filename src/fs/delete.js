import { rm } from 'node:fs/promises';
import { isTargetAccessible } from "./helpers/helperFunctions.js";

const remove = async (fileToRemove) => {
    const isFileExist = isTargetAccessible(fileToRemove);

    if (isFileExist) {
        await rm(fileToRemove);
    } else {
        throw new Error('FS operation failed');
    }

    console.log('SUCCESSFULLY DELETED');
};

await remove('./files/fileToRemove.txt');
