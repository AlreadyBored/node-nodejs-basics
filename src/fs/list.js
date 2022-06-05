import fs from "fs/promises";

export const list = async () => {
    try {
        const readFiles = await fs.readdir('./src/fs/files')

        for (const file of readFiles) {
            console.log(file)
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await list()