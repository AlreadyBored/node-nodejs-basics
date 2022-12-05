import { rm }         from 'node:fs/promises';
import { existsSync } from 'fs';

const remove = async () => {
    const filePath = new URL('files/fileToRemove.txt', import.meta.url);
    try {
        if (!existsSync(filePath)) {
            throw new Error('FS operation failed')
        }
        await rm(filePath);
    } catch (error) {
        console.log(error.message)
    }
};

await remove();