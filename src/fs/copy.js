import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OUTPUT_DIR_NAME = 'files';
const INPUT_DIR_NAME = 'files_copy';
const ERR_MSG = 'FS operation failed'

const copy = async () => {
    const originalDirPath = join(dirname(fileURLToPath(import.meta.url)), OUTPUT_DIR_NAME);
    const targetDirPath = join(dirname(fileURLToPath(import.meta.url)), INPUT_DIR_NAME);

    try {
        await fs.access(originalDirPath, fs.constants.F_OK);
    } catch(err) {
        console.error(new Error(ERR_MSG));

        return;
    }

    try {
        await fs.access(targetDirPath, fs.constants.F_OK);

        throw new Error(ERR_MSG);
    } catch(err) {
        if (err.message === ERR_MSG) {
            console.error(err);

            return;
        }
    }

    try {
        await fs.cp(originalDirPath, targetDirPath, { recursive: true });
    } catch (err) {
        console.error('Error copying folder:', err);
    }

};

await copy();
