import { access, writeFile } from 'fs/promises';
import path from 'node:path'

export const createNewFile = async (currentPath, filepath) => {
    const newpath = path.resolve(currentPath, filepath)

    const isFileCreated = await access(newpath).then(() => true).catch(() => false);

    if (isFileCreated) {
        console.error('File already created');
    }
    try {
        writeFile(newpath, '')
    } catch(_) {
        console.error('Cannot create file')
    }
}