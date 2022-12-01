import {writeFile} from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const FILE_CONTENT = 'I am fresh and young'
const ERROR_MESSAGE = 'FS operation failed'
const FILE_NAME = 'fresh.txt'
const FILE_FOLDER = 'files'

const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename);
const filepath = path.join(__dirname, path.sep, FILE_FOLDER, FILE_NAME)

const create = async () => {
    try {
        await writeFile(filepath, FILE_CONTENT, {flag: 'wx'})
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
}

await create()

