import { unlink, stat } from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const fileToRemove = path.join(directory, 'files', 'fileToRemove.txt')
    let fileNotExists = false
    try {
        await stat(fileToRemove)
    } catch {
        fileNotExists = true
    }
    if (fileNotExists) {
        throw new Error('FS operation failed')
    }
    await unlink(fileToRemove)
};

await remove();
