import {readdir,open} from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const FILES_FOLDER = 'files'
const ERROR_MESSAGE = 'FS operation failed'

const getFileList = async (dirName) => {
    let files = []
    const items = await readdir(dirName, { withFileTypes: true })
    for (const item of items) {
        if (item.isDirectory()) {
            files = [
                ...files,
                ...await (getFileList(`${dirName}/${item.name}`)),
            ]
        } else {
            files.push(item.name)
        }
    }
    return files
}
const list = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(filename);
    const folder = path.join(__dirname, path.sep, FILES_FOLDER,)
    try {
        await open(folder)
        const aFiles = await getFileList(folder)
        console.log(aFiles)
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
};

await list();