import * as fs from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const FILES_FOLDER = 'files'
const W_FILE = 'wrongFilename.txt'
const P_FILE = 'properFilename.md'
const ERROR_MESSAGE = 'FS operation failed'


const isExist = (path) => {
    return fs.stat(path).then(fs => {
        return fs.isFile()
    }).catch(() => {
        return false
    })
}

const rename = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(filename);
    const wFile = path.join(__dirname, path.sep, FILES_FOLDER, path.sep, W_FILE)
    const pFile = path.join(__dirname, path.sep, FILES_FOLDER, path.sep, P_FILE)

    try {
        const isExistW = await isExist(wFile)
        const isExistP = await isExist(pFile)
        if (isExistW && !isExistP) {
            fs.rename(wFile, pFile, (err) => {
                if (err) throw ERROR_MESSAGE
            })
        } else {
            throw ERROR_MESSAGE
        }
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
};

await rename();