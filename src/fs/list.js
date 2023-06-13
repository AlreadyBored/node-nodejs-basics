import { readdir } from "fs/promises"

const list = async () => {
    try {
        const fileNames = await readdir("files")
        console.log(fileNames)
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await list();