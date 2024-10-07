import {readFile, writeFile} from "fs/promises";

const create = async () => {
    try {
        const fileCheck = await readFile("./files/fresh.txt");
        if (fileCheck) {
            throw new Error("FS operation failed: file already exists");
        }
    } catch (error) {
        if (error.code === 'ENOENT' && error.path === "./files/fresh.txt") {
            await writeFile("./files/fresh.txt", "I am fresh and young");
        } else {
            throw error;
        }
    }
};

await create();