import {isExistAsync} from "../helpers/isExistAsync.js";
import { rm } from 'node:fs/promises';

const remove = async () => {
    if (await isExistAsync('./files/fileToRemove.txt')) {
        rm('./files/fileToRemove.txt').catch(err => {
            console.error(err)
        })
    } else {
        throw new Error('FS operation failed');
    }
};

await remove();