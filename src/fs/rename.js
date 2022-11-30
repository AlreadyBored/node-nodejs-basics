import { copyFile, constants, rm } from 'fs/promises'
import { getCombinedPath } from '../pathHelper.js';

const rename = async () => {
    const oldFileName = 'wrongFilename.txt'
    const newFileName = 'properFilename.md'

    const oldPath = getCombinedPath(import.meta.url, 'files', oldFileName)
    const newPath = getCombinedPath(import.meta.url, 'files', newFileName)

    try {
        await copyFile(oldPath, newPath, constants.COPYFILE_EXCL);
        await rm(oldPath)
    } catch {
        throw Error('FS operation failed')
    }
};

await rename();