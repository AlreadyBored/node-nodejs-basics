import { errorMessage, pathToFolder } from "../lib/fs/constants.js";
import { join } from 'path';
import { access, stat, constants, rename as renameFile } from 'fs/promises';

const fileNameForRename = 'wrongFileName.txt';
const newFileName = 'properFilename.md';
const pathToFileForRename = join(pathToFolder(), fileNameForRename);
const pathToNewFile = join(pathToFolder(), newFileName);


const rename = async () => {
    try {
        await access(pathToFileForRename, constants.F_OK);
    } catch (error) {
        throw new Error(errorMessage);
    }
  
    try {
        await access(pathToNewFile)
        throw new Error(errorMessage);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            renameFile(pathToFileForRename, pathToNewFile);
        }
    }
};

await rename();