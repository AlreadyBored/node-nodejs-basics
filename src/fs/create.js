import { writeFile } from 'fs/promises'
import { getCombinedPath } from '../pathHelper.js';

const create = async () => {
    const fileName = 'fresh.txt'
    const fileContent = 'I am fresh and young'

    const pathToFile = getCombinedPath(import.meta.url, 'files', fileName)

    try {
        await writeFile(pathToFile, fileContent, { flag: 'wx' })
    } catch {
        throw Error('FS operation failed')
    }
};

await create();