import {readFile} from 'node:fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const ERROR_MESSAGE = 'FS operation failed'
const FILE_NAME = 'fileToRead.txt'
const FILE_FOLDER = 'files'

const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename);
const filepath = path.join(__dirname, path.sep, FILE_FOLDER, FILE_NAME)

const read = async () => {
    try {
        const data = await readFile(filepath, {flag: 'r+'})
        console.log(data.toString())
    } catch (e) {
        throw new Error(ERROR_MESSAGE)
    }
};

await read();