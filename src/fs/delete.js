import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const DIR_NAME = 'files';
const FILE_NAME = 'fileToRemove.txt';
const ERR_MSG = 'FS operation failed'

const remove = async () => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, FILE_NAME);

    try {
        await fs.access(filePath, fs.constants.F_OK);
    } catch(err) {
        console.error(new Error(ERR_MSG));

        return;
    }

    try {
        await fs.rm(filePath);
    } catch (err) {
        console.error('Error deleting file:', err);
    }

};

await remove();
