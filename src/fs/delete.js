import * as fs from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const FILES_FOLDER = 'files'
const R_FILE = 'fileToRemove.txt'
const ERROR_MESSAGE = 'FS operation failed'


const isExist = (path) => {
    return fs.stat(path).then(fs => {
        return fs.isFile()
    }).catch(() => {
        return false
    })
}

const remove = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(filename);
    const rFile = path.join(__dirname, path.sep, FILES_FOLDER, path.sep, R_FILE)

    try {
        const isExistR = await isExist(rFile)
        if (isExistR) {
            fs.unlink(rFile)
        } else {
            throw ERROR_MESSAGE
        }
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
};

await remove()