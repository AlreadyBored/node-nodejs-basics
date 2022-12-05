import { readdir }    from 'node:fs/promises';
import { existsSync } from "fs";

const list = async () => {
    try {
        const dirPath = new URL('files', import.meta.url);
        if (!existsSync(dirPath)) {
            throw new Error('FS operation failed');
        }
        const fileNames = await readdir(dirPath);
        console.log(fileNames.join(', '));
    } catch (error) {
        console.log(error.message)
    }
};

await list();