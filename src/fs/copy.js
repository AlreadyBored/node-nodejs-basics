import { cp, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url';

const copy = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    let folderExists = true;
    const file1 = path.join(directory, 'files')
    const file2 = path.join(directory, 'files_copy')
    try {
        await stat(file2)
    } catch {
        folderExists = false
    }
    if (folderExists) {
        throw new Error('FS operation failed')
    }
    await cp(file1, file2, { recursive: true })
};

await copy();
