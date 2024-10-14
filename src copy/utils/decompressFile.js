import path from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from "node:stream/promises";
import { access, stat } from 'fs/promises'
import { createBrotliDecompress } from 'node:zlib';

export const decompressFile = async (currentPath, oldname, newpath) => {
    const arhivePath = path.resolve(currentPath, oldname)
    const decompressPath = path.resolve(currentPath, newpath)

    const isCreated = await access(arhivePath).then(() => true).catch(() => false);
    
    if (!isCreated) {
        console.error("File doesn't exists")
        return;
    }

    const stats = await stat(arhivePath)

    if (stats.isDirectory()) {
        console.error('It is directory')
        return
    }

    const isDestinationUse = await access(decompressPath).then(() => true).catch(() => false);

    if (isDestinationUse) {
        console.error('New destination already use')
        return;
    }

    const brotli = createBrotliDecompress();
    const source = createReadStream(arhivePath);
    const destination = createWriteStream(decompressPath);
    try {
        await pipeline(source, brotli, destination);
    } catch(_) {
        console.error('Cannot compress file')
    }
}