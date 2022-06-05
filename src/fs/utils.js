import {access} from 'fs/promises';
import {constants} from 'fs';

export const checkFileExists = async (path) => {
    try {
        await access(path, constants.R_OK | constants.W_OK);

        return true;
    } catch {
        return false;
    }
};
