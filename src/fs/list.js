import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const list = async () => {
    // list.js - implement function that prints all array of filenames
    // from files folder into console
    // (if files folder doesn't exists Error with message FS operation failed must be thrown)

    const path = (p) => fileURLToPath(new URL(p, import.meta.url));

    try {
        const files = await fs.readdir(path('./files'));
        console.log(files);
    } catch (e) {        
        throw new Error('FS operation failed');
    }
};

list();