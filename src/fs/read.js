import { readFile } from "fs/promises"

const read = async () => {
    try {
        const content = await readFile("files/fileToRead.txt", { encoding: "utf8" })
        console.log(content)
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await read();