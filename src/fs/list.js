import {readdir, access} from'fs/promises';
import { errorMessage, pathToFolder } from '../lib/fs/constants.js';

const list = async () => {
    try {
        await access(pathToFolder());
        console.log(await readdir(pathToFolder()));
        
    } catch(err) {
        throw new Error(errorMessage);
    }
};

await list();