import { access, constants } from 'node:fs/promises';
const FILE_PATH = './files/fresh.txt';

export const create = async (filePath) => {
    const string = 'I am fresh and young';

    let isFileExist;

    try {
        await access(filePath, constants.R_OK);
        isFileExist = true;
    } catch {
        isFileExist = false;
    }

    if (!isFileExist) {
        return writeFile(FILE_PATH, string);
    } else {
        throw new Error('FS operation failed');
    }
};

await create(FILE_PATH);
