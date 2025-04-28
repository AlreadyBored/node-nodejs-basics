import { rm } from 'fs/promises';
import {join} from 'path';
import { errorMessage, pathToFolder } from '../lib/fs/constants.js';

const fileNameToDelete = 'fileToRemove.txt';
const pathToFileForDelete = join(pathToFolder(), fileNameToDelete);

const remove = async () => {
    try {
        await rm(pathToFileForDelete);
    } catch(err) {
        throw new Error(errorMessage);
    }
};

await remove();