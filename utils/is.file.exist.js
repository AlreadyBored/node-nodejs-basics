import { stat } from 'node:fs/promises';

export const isFileExist = async (path) => {
    try {
        await stat(path);
        return true;
    } catch (error) {
        return false;
    }
}