import {isExistAsync} from "../helpers/isExistAsync.js";
import { readdir, copyFile, mkdir } from 'node:fs/promises';

const copy = async () => {
    //I decided not to use the experimental cp method
    if ( await isExistAsync('./files') && !await isExistAsync('./files_copy')) {
        mkdir(new URL('./files_copy/', import.meta.url), { recursive: true }).then(()=>{
            readdir('./files').then((files)=>{
                for (const file of files) {
                        copyFile(`./files/${file}`, `./files_copy/${file}`).catch((err)=>{
                            console.error(err);
                        })
                }
            }).catch((err)=>{
                console.error(err);
            })
        })
    } else {
        throw new Error('FS operation failed');
    }
};

copy();