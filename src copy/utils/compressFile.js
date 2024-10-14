import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from "node:stream/promises";
import { access, stat } from 'fs/promises'
import { createBrotliCompress } from 'node:zlib';

export const compressFile = async (currentPath, oldname, newpath) => {
    const absoldpath = path.resolve(currentPath, oldname)
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

    const brotli = createBrotliCompress();
    const source = createReadStream(absoldpath);
    const destination = createWriteStream(absnewpath);
    try {
        await pipeline(source, brotli, destination);
    } catch(_) {
        console.error('Cannot compress file')
    }
}