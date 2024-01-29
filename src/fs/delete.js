import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const DELETE_FILENAME = 'fileToRemove.txt'
const ERROR_MESSAGE = 'FS operation failed';
const deleteFilePath = path.join(__dirname, FILES_PATH, DELETE_FILENAME)

const isExist = async (path) => await fsPromises.access(path).then(() => true).catch(() => false)

const removeFile = async (path) => {
    const isFileExist = await isExist(deleteFilePath)

    if (!isFileExist) {
        throw new Error(ERROR_MESSAGE)
    }

    fsPromises.rm(path)
}

const remove = async () => {
    await removeFile(deleteFilePath)
};

await remove();