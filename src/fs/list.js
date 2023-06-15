import { stat, readdir } from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'url';

const list = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const folder = path.join(directory, 'files')
    let folderNotExists = false;
    try {
        await stat(folder)
    } catch {
        folderNotExists = true
    }
    if (folderNotExists) {
        throw new Error('FS operation failed')
    }
    const fileNames = await readdir(folder)
    console.log(fileNames)
};

await list();
