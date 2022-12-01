import {cp, stat} from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const FROM = 'files'
const TO = 'files_copy'
const ERROR_MESSAGE = 'FS operation failed'

const isFolderExist = (path) => {
    return stat(path).then(fs => {
        return fs.isDirectory()
    }).catch(() => {
        return false
    })
}

const copy = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(filename);
    const src = path.join(__dirname, path.sep, FROM)
    const dest = path.join(__dirname, path.sep, TO)

    try {
        const isExistSrc = await isFolderExist(src)
        const isExistDest = await isFolderExist(dest)
        if (!isExistSrc || isExistDest) throw ERROR_MESSAGE
        await cp(src, dest, {recursive: true})
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
};

copy()