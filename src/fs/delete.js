import { unlink } from 'node:fs/promises';
import { existsSync } from "node:fs";

const remove = async () => {
    try {
        const path = './src/fs/files/fileToRemove.txt';
        if (!existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const delFile = await unlink('./src/fs/files/fileToRemove.txt');
        }
    } catch (e) {
        console.log(e)
    }
};

await remove();