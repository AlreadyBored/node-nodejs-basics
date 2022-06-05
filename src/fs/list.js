import { access, readdir } from 'fs/promises';



export const list = async () => {
    try {
        await access('./files/');
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        const files = await readdir('./files/');
        for (const file of files)
            console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
