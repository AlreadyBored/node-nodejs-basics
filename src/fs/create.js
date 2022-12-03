import { writeFile } from 'node:fs/promises';
import { existsSync } from "node:fs";

const create = async () => {
    try {
        const path = './src/fs/files/fresh.txt';
        if (existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const data = 'I am fresh and young'
            const file = await writeFile('./src/fs/files/fresh.txt', data);
            return file;
        }
    } catch (e) {
        console.log(e)
    }
};

await create();