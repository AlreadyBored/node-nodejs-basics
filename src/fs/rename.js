import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url';

const rename = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const oldName = path.join(directory, 'files', 'wrongFilename.txt')
    const newName = path.join(directory, 'files', 'properFilename.md')
    let newFileExists = true
    let oldFileNotExists = false
    try {
        await fs.stat(newName)
    } catch {
        newFileExists = false
    }
    try {
        await fs.stat(oldName)
    } catch {
        oldFileNotExists = true
    }
    if (newFileExists || oldFileNotExists) {
        throw new Error('FS operation failed')
    }
    await fs.rename(oldName, newName)
};

await rename();
