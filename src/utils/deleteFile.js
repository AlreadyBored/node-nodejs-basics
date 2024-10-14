import path from 'node:path'
import { access, stat, rm } from 'fs/promises'

export const deleteFile = async (currentPath, filepath) => {
    if (!filepath) {
        console.error('Invalid input')
        return;
    }

    const absfilepath = path.resolve(currentPath, filepath);

    const isCreated = await access(absfilepath).then(() => true).catch(() => false);
    
    if (!isCreated) {
        console.error("File doesn't exists")
        return;
    }

    const stats = await stat(absfilepath)

    if (stats.isDirectory()) {
        console.error('It is directory')
        return
    }


    try {
        await rm(absfilepath)
    } catch(_) {
        console.error('Cannot delete file')
    }
}