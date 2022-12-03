import { existsSync } from "node:fs";
import {  readdir} from 'node:fs/promises';
const list = async () => {
    try {
        const path = './src/fs/files';
        if (!existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const readDir = await readdir(path);
            readDir.forEach(elem => {
                const arr = elem.split('.');
                console.log(arr[1])
            });
        }
    } catch (e) {
        console.log(e)
    }
};

await list();