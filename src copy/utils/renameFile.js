import { stat, rename, access } from 'fs/promises'
import path from 'node:path'

export const renameFile = async (currentPath, oldPath, newPath) => {
    const absoldpath = path.resolve(currentPath, oldPath)
    const absnewpath = path.resolve(currentPath, newPath)

    const isCreated = await access(absoldpath).then(() => true).catch(() => false);

    if (!isCreated) {
        console.error("File doesn't exists")
        return;
    }

    const stats = await stat(absoldpath)

    if (stats.isDirectory()) {
        console.error('It is directory')
        return
    } 
    
    try {
        await rename(absoldpath, absnewpath)
    } catch(_) {
        console.error('Cannot rename file')
    }
}