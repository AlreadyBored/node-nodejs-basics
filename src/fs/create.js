import * as fsPromises from "node:fs/promises";

const create = async () => {
    try {
        await fsPromises.writeFile("./files/fresh.txt", "I am fresh and young", { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
