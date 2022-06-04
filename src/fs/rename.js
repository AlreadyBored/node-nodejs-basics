import {copyFile, rm} from 'fs/promises';
import { constants } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const fileToRenamePath = dirname(fileURLToPath(import.meta.url)) + '/files/wrongFilename.txt';
const renamedFilePath = dirname(fileURLToPath(import.meta.url)) + '/files/properFilename.md';

export const rename = async () => {
    try {
        await copyFile (fileToRenamePath, renamedFilePath, constants.COPYFILE_EXCL);
        await rm(fileToRenamePath);
    } catch (err) {
        console.log("Got some error: " + err);
        throw new Error("FS operation failed");
    }
};
