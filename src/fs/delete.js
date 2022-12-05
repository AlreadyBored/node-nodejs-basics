import fs from 'fs'
import fsPromises from 'fs/promises'

const fileToRemove = "./src/fs/files/fileToRemove.txt"

export const remove = async () => {
    fs.access(fileToRemove, async function (err) {
        if (err) {
            try {
                throw new Error("FS operation failed")
            } catch (err) {
                console.error(err.message)
            }
        } else {
            await fsPromises.unlink(fileToRemove);
        }
    });
};

await remove();