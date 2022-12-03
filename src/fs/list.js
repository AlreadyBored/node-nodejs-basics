import {isExistAsync} from "../helpers/isExistAsync.js";
import { readdir } from 'node:fs/promises';

const list = async () => {
    if (await isExistAsync('./files')) {
        readdir('./files').then((files)=>{
            for (const file of files) {
                console.log(file);
            }
        }).catch((err)=>{
            console.error(err);
        })
    } else {
        throw new Error('FS operation failed');
    }
};

await list();