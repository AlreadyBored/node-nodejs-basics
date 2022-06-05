import fs from "fs/promises"

export const remove = async () => {
    try {
        const file = await fs.unlink('./files/fileToRemove.txt')
       } catch {
           throw new Error("FS operation failed")
       }
};