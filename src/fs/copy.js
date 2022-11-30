import { mkdir, cp } from 'fs/promises'
import { getCombinedPath } from '../pathHelper.js';

const copy = async () => {
    const sourceFolder = getCombinedPath(import.meta.url, 'files')
    const destinationFolder = getCombinedPath(import.meta.url, 'files_copy')

    try {
        await mkdir(destinationFolder)
        await cp(sourceFolder, destinationFolder, { recursive: true })
    } catch {
        throw Error('FS operation failed')
    }
};

copy();