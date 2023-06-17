import { unlink } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname } from 'node:path';

const directoryPath = dirname(fileURLToPath(import.meta.url));

export const remove = async () => {
    const errorMessage = 'FS operation failed';

    try {
        await unlink(`${directoryPath}/files/fileToRemove.txt`);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();