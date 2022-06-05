import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const read = async () => {
    // read.js - implement function that prints content of the fileToRead.txt
    // into console (if there's no file fileToRead.txt
    // Error with message FS operation failed must be thrown)

    const path = (p) => fileURLToPath(new URL(p, import.meta.url));

    try {
        const file = await fs.readFile(path('./files/fileToRead.txt'), 'utf-8');
        console.log(file);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();