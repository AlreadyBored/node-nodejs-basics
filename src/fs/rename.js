import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const DIR_NAME = 'files';
const WRONG_FILE_NAME = 'wrongFilename.txt';
const CORRECT_FILE_NAME = 'properFilename.md';
const ERR_MSG = 'FS operation failed'

const rename = async () => {
    const originalFile = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, WRONG_FILE_NAME);
    const targetFile = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, CORRECT_FILE_NAME);

    try {
        await fs.access(originalFile, fs.constants.F_OK);
    } catch(err) {
        console.error(new Error(ERR_MSG));

        return;
    }

    try {
        await fs.access(targetFile, fs.constants.F_OK);

        throw new Error(ERR_MSG);
    } catch(err) {
        if (err.message === ERR_MSG) {
            console.error(err);

            return;
        }
    }

    try {
        await fs.rename(originalFile, targetFile);
    } catch (err) {
        console.error('Error renaming file:', err);
    }

};

await rename();
