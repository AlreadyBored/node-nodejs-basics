import { unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
const remove = async () => {
    if (!existsSync('src/fs/files/fileToRemove.txt')) {
        throw new Error ('FS operation failed')
    }
    await unlink("src/fs/files/fileToRemove.txt")
};

await remove();