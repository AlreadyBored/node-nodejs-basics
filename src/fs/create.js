import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";


const FILE_NAME = 'fresh.txt';
const TARGET_DIR_NAME = 'files';
const FILE_CONTENT = 'I am fresh and young';
const ERR_MSG = 'FS operation failed'

const create = async () => {
    const currentDirName = dirname(fileURLToPath(import.meta.url));

    const filePath = join(currentDirName, TARGET_DIR_NAME, FILE_NAME);

    try {
        await fs.access(filePath, fs.constants.F_OK);

        throw new Error(ERR_MSG);
    } catch(err) {

        if (err.message === ERR_MSG) {
            console.error(err);

            return;
        }
    }

    try {
        await fs.writeFile(filePath, FILE_CONTENT);
    } catch (err) {
        console.error('Error creating file:', err);
    }
};

await create();
