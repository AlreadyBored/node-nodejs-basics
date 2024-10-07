import { readdir } from 'fs/promises';

const list = async () => {
    try {
        const files = await readdir("./filess");
        console.log("FILES: ", files);
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error(`FS operation failed: folder doesn't exist`)
        }
    }
};

await list();