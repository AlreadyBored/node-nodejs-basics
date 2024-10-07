import { rm } from 'fs/promises';

const remove = async () => {
    try {
        await rm("./files/fileToRemoveNot.txt");

    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error(`FS operation failed: file doesn't exist`);
        } else {
            throw error;
        }
    }
};

await remove();