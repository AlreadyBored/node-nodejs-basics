// implement function that renames file wrongFilename.txt 
// to properFilename with extension .md 
// (if there's no file wrongFilename.txt or 
// properFilename.md already exists Error with message FS operation failed must be thrown)
import { access, rename as renameAsync } from 'fs/promises';

const rename = async () => {
    try {
        await access('files/wrongFilename.txt').catch(() => {
            throw new Error('FS operation failed')
        })
        await access('files/properFilename.md').then(() => {
            throw new Error('FS operation failed')
        })
    } catch(err) {
        if (err.code === 'ENOENT') {
            await renameAsync('files/wrongFilename.txt', 'files/properFilename.md')
        } else {
            throw new Error('FS operation failed')
        }
    }
};

await rename();