import * as fs from "node:fs/promises";

export const list = async () => {

    try {
        const files = await fs.readdir("./src/fs/files");

        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        throw Error('FS operation failed');
    }

};

list();