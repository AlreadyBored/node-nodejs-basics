import * as fsPromises from "node:fs/promises";

const read = async () => {
    try {
        const result = await fsPromises.readFile("./files/fileToRead.txt");
        console.log(result);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
