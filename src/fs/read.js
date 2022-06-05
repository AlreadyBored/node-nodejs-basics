import fs from "fs/promises";

export const read = async () => {
    try {
        const contentBuffer = await fs.readFile('./src/fs/files/fileToRead.txt')
        console.log( contentBuffer.toString())
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read()