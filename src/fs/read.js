import { getCombinedPath } from '../pathHelper.js';
import { readFile } from 'fs/promises'

const read = async () => {
    const fileName = 'fileToRead.txt'
    const pathToFile = getCombinedPath(import.meta.url, 'files', fileName)

    try {
        const fileContent = await readFile(pathToFile, 'utf8');
        console.log(fileContent)
    } catch {
        throw Error('FS operation failed')
    }
};

await read();