import { existsSync } from "node:fs";
import {rename as rn} from 'node:fs/promises'

const rename = async () => {
    try {
        const path = './src/fs/files/wrongFilename.txt';
        const path2 = './src/fs/files/properFilename.md';
        if (existsSync(path2) || !existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            return await rn(path, path2);
        }
    } catch (e) {
        console.log(e)
    }
};

await rename();