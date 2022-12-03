import { writeFile } from 'node:fs/promises';
import {isExistAsync} from "../helpers/isExistAsync.js";

const create = async () => {
    if (await isExistAsync('./files/fresh.txt')) {
        throw new Error('FS operation failed');
    } else {
        writeFile('./files/fresh.txt', 'I am fresh and young').catch(err => {
            console.log(err);
        })
    }
};

await create();