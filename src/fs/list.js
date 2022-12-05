import fs from 'fs/promises'
import { getCombinedPath } from "../pathHelper.js";

const list = async () => {
    const pathToFolder = getCombinedPath(import.meta.url, 'files')

    try {
        const fileNames = await fs.readdir(pathToFolder)
        
        console.log(fileNames)
    } catch {
        throw Error('FS operation failed')
    }
};

await list();