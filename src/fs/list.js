import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
    // Write your code here
    const folderToList = path.join(__dirname, './files')
    const getFileList = async (folder) => await fs.readdir(folder)

    try {
        const fileList = await getFileList(folderToList)
        console.log(fileList)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await list();