import * as fsPromises from "node:fs/promises";

const remove = async () => {
    try {
        await fsPromises.unlink("./files/fileToRemove.txt");
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
