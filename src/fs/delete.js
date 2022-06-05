import * as fs from "node:fs/promises";

export const remove = async () => {


    try {
        await fs.unlink('./src/fs/files/fileToRemove.txt');
    } catch (error) {
        throw Error('FS operation failed');
    }
};

remove();