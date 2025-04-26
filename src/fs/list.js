import * as fsPromises from "node:fs/promises";

const list = async () => {
    try {
        const result = await fsPromises.readdir("./files");
        console.log(result);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
