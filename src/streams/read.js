import {createReadStream} from 'node:fs'
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'

const FOLDER_NAME = 'files'
const FILE_NAME = 'fileToRead.txt'
const CODE_PAGE = 'utf8'
const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename);
const src = path.join(__dirname, path.sep, FOLDER_NAME, path.sep, FILE_NAME)

const read = async () => {
    const readStream = createReadStream(src, CODE_PAGE)
    readStream.on('data', data => process.stdout.write(data))
};

await read();