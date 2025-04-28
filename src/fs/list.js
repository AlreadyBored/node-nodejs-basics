import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const DIR_NAME = 'files';
const ERR_MSG = 'FS operation failed'

const list = async () => {
    const dirPath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME);

    try {
        await fs.access(dirPath, fs.constants.F_OK);
    } catch(err) {
        console.error(new Error(ERR_MSG));

        return;
    }

    try {
        const result = await fs.readdir(dirPath)

        const array = result.map(fileName => {
            return fileName;
        });

        console.log(array)
    } catch (err) {
        console.error('Error listing folder:', err);
    }

};

await list();
