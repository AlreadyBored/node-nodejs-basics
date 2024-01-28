import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
    // Write your code here
    const srcFolder = path.join(__dirname, './files')
    const dstFolder = path.join(__dirname, './files_copy')

    const folderExiststFunc = async (folder) => {
        try {
            await fs.access(folder)
        } catch {
            return false
        }
        return true
    }

    const srcExists = await folderExiststFunc(srcFolder)
    const dstExists = await folderExiststFunc(dstFolder)

    const copyFolder = async (src, dst) => {
        const srcFilePath = (fileName) => path.join(src, fileName)
        const dstFilePath = (fileName) => path.join(dst, fileName)
        const fileList = await fs.readdir(src)
        fileList.map(async (file) => await fs.copyFile(srcFilePath(file), dstFilePath(file)))
    }

    try {
        if (srcExists && !dstExists) {
            await fs.mkdir(dstFolder)
            await copyFolder(srcFolder, dstFolder)
        } else {
            throw new Error('FS operation failed')
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
