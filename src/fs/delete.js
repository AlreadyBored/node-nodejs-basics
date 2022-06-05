import { rm } from 'fs/promises';

const REMOVE_ERROR_MESSAGE = 'FS operation failed';
const FILE_PATH = 'files/fileToRemove.txt';
export const remove = async () => {
    try {
        await rm(FILE_PATH);
    } catch {
        throw new Error(REMOVE_ERROR_MESSAGE)
    }
};
