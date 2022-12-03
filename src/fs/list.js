import { existsSync } from "node:fs";
import {  readdir} from 'node:fs/promises';
const list = async () => {
    try {
        const path = './src/fs/files';
        if (!existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const readDir = await readdir(path);
            const res = [];
            readDir.forEach(elem => {
                const arr = elem.split('.');
                res.push(arr[1]);
            });
            return res
        }
    } catch (e) {
        console.log(e)
    }
};

await list();