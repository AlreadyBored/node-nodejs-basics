import { rm } from 'fs/promises'
import { getCombinedPath } from '../pathHelper.js';

const remove = async () => {
    const fileName = 'fileToRemove.txt'
    const pathToFile = getCombinedPath(import.meta.url, 'files', fileName)

    try {
        await rm(pathToFile)
    } catch {
        throw Error('FS operation failed')
    }
};

await remove();