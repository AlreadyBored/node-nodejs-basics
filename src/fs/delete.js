import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const remove = async () => {
    // delete.js - implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

    const path = (p) => fileURLToPath(new URL(p, import.meta.url));

    try {
        await fs.unlink(path('./files/fileToRemove.txt'));
    } catch (e) {        
        throw new Error('FS operation failed');
    }
};

remove();