import { readdir } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));


export const list = async () => {
    const errorMessage = 'FS operation failed';

    try {
        const allFiles = await readdir(`${directoryPath}/files`);
        console.log(allFiles)

    } catch (error) {
        throw new Error(errorMessage);
    }
};

list();