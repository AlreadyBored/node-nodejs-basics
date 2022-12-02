import {createWriteStream} from 'node:fs'
import {fileURLToPath} from 'url'
import path, {dirname} from 'path'

const FOLDER_NAME = 'files'
const FILE_NAME = 'fileToWrite.txt'
const filename = fileURLToPath(import.meta.url)
const __dirname = dirname(filename);
const src = path.join(__dirname, path.sep, FOLDER_NAME, path.sep, FILE_NAME)


const write = async () => {
    const writeStream = createWriteStream(src)
    process.stdin.on('data', data => writeStream.write(data.toString()))
};

await write();