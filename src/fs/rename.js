import {isExistAsync} from "../helpers/isExistAsync.js";
import { rename as asyncRename} from 'node:fs/promises';

const rename = async () => {
    if (await isExistAsync('./files/wrongFilename.txt') || !await isExistAsync('./files/properFilename.md')) {
        asyncRename('./files/wrongFilename.txt', './files/properFilename.md').catch((err)=>{
            console.error(err)
        })
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();