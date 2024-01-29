import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const ERROR_MESSAGE = 'FS operation failed';
const READ_FILENAME = 'fileToRead.txt'

const readFilePath = path.join(__dirname, FILES_PATH, READ_FILENAME)

const isExist = async (path) => await fsPromises.access(path).then(() => true).catch(() => false)

const readFile = async (path) => {
    const isFileExist = await isExist(path)

    if (!isFileExist) {
        throw new Error(ERROR_MESSAGE)
    }

    const content = await fsPromises.readFile(path, { encoding: 'utf-8' })

    console.log(content)
}

const read = async () => {
    readFile(readFilePath)
};

await read();