import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from "node:stream/promises";
import { access, stat, rm } from 'fs/promises'

export const moveFile = async (currentPath, oldpath, newpath) => {
    if (!oldpath || !newpath) {
        console.error('Invalid input')
        return;
    }

    const absoldpath = path.resolve(currentPath, oldpath)
    const absnewpath = path.resolve(currentPath, newpath)

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

    const isDestinationUse = await access(absnewpath).then(() => true).catch(() => false);

    if (isDestinationUse) {
        console.error('New destination already use')
        return;
    }

    const sourceReadStream = createReadStream(absoldpath)
    const destinationWritableStream = createWriteStream(absnewpath)
    try {
        await pipeline(sourceReadStream, destinationWritableStream)
        await rm(absoldpath);
    } catch(_) {
        console.error("Cannot move file")
    }   
}