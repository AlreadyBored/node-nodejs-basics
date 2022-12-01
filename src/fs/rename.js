import fs from 'fs'
import path from 'path'

const rename = async () => {
    // Write your code here
    // rename.js - implement function that renames file
    // wrongFilename.txt to properFilename with extension .md
    // (if there's no file wrongFilename.txt or properFilename.md
    // already exists Error with message FS operation failed must be thrown)
    const wrongFilename = 'wrongFilename.txt'
    const properFilename = 'properFilename.md'
    const files = path.resolve('src', 'fs', 'files')
    const wrong = path.join(files, wrongFilename)
    const proper = path.join(files, properFilename)

    try {
        if (fs.existsSync(proper)) throw new Error('FS operation failed')
        await fs.promises.rename(wrong, proper)
    } catch (e) {
        throw e
    }
};

await rename();