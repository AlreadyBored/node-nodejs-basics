// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from 'node:fs/promises'

const list = async () => {
    try {
        const filenames = await readdir('./files')
        for (const name of filenames) {
            console.log(name)
        }
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();