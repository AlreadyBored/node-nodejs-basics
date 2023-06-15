import { open, opendir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


export const getFilePath = url => fileURLToPath(url);
export const getDirPath = url => dirname(getFilePath(url));

const getObjectExistence = async (path, open, closeMethod) => {
    try {
        const object = await open(path);

        if (closeMethod) await object[closeMethod]();

        return true;
    } catch {

        return false;
    }
};

export const getExistence = {
    file: (path) => getObjectExistence(path, open, 'close'),
    dir: (path) => getObjectExistence(path, opendir, 'close'),
};
