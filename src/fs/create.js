import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const create = async () => {
    // create.js - implement function that creates new file fresh.txt
    // with content I am fresh and young inside of the files folder
    // (if file already exists Error with message FS operation failed must be thrown)
    const content = 'I am fresh and young';
    const path = fileURLToPath(new URL('./files/fresh.txt', import.meta.url));

    const expectedErrorCode = 'ENOENT';

    let isFileExist = false;

    try {
        const r = await fs.readFile(path);
        isFileExist = true;
    } catch (e) {
        if (e.code !== expectedErrorCode) {
            console.warn(`Unexpected code error "${e.code}"`);
        }
    }

    if (isFileExist) {
        throw new Error('FS operation failed');
    }

    await fs.writeFile(path, content);
};

create();