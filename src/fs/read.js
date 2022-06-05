import fs from "fs/promises"

export const read = async () => {
    try {
     const file = await fs.readFile('./files/fileToRead.txt','utf8')
     console.log(file);
    } catch {
        throw new Error("FS operation failed")
    }
};
