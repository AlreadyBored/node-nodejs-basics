import { readFile }       from 'node:fs/promises'
import { existsSync }     from "fs";

const read = async () => {
    try {
        const filePath    = new URL('files/fileToRead.txt', import.meta.url);
        if (!existsSync(filePath)) {
            throw new Error('FS operation failed')
        }
        const content = await readFile(filePath)
        console.log(content.toString())
    } catch (error) {
        console.log(error.message)
    }
};

await read();