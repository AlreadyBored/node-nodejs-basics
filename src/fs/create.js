import { writeFile } from 'node:fs/promises';
import { isTargetAccessible }  from "./helpers/helperFunctions.js";

const FILE_PATH = './files/fresh.txt';
const string = 'I am fresh and young';

export const create = async (filePath, data) => {
    const isFileExist = await isTargetAccessible(filePath);
    if (!isFileExist) {
        return writeFile(FILE_PATH, string);
    } else {
        throw new Error('FS operation failed');
    }

    console.log('SUCCESSFULLY CREATED');
};

await create(FILE_PATH, string);
