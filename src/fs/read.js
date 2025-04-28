import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const DIR_NAME = 'files';
const FILE_NAME = 'fileToRead.txt';
const ERR_MSG = 'FS operation failed'

const read = async () => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), DIR_NAME, FILE_NAME);

    try {
        await fs.access(filePath, fs.constants.F_OK);
    } catch(err) {
        console.error(new Error(ERR_MSG));

        return;
    }

    try {
        const result = await fs.readFile(filePath, { encoding: 'utf8' })

        console.log(result)
    } catch (err) {
        console.error('Error reading file:', err);
    }

};

await read();
