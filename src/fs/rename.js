import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const rename = async () => {
    // rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md
    // (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
    
    const path = (p) => fileURLToPath(new URL(p, import.meta.url));

    const wrong = path('./files/wrongFilename.txt');
    const proper = path('./files/properFilename.md');

    const checkUnexist = async () => {
        try {
            await fs.readFile(proper);
        } catch (e) {
        }
        throw new Error('inner');
    };

    try {
        await checkUnexist(proper);
        await fs.rename(wrong, proper);
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

rename();
