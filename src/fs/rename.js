import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const ERROR_MESSAGE = 'FS operation failed';
const OLD_FILENAME = 'wrongFilename.txt'
const NEW_FILENAME = 'properFilename.md'
const oldFilePath = path.join(__dirname, FILES_PATH, OLD_FILENAME)
const newFilePath = path.join(__dirname, FILES_PATH, NEW_FILENAME)

const isExist = async (path) => await fsPromises.access(path).then(() => true).catch(() => false)

const renameFile = async (oldPath, newPath) => {
    const isOldFileExist = await isExist(oldPath)
    const isNewFileExist = await isExist(newPath)

    if (isNewFileExist || !isOldFileExist) {
        throw new Error(ERROR_MESSAGE)
    }

    await fsPromises.rename(oldPath, newPath)
}

const rename = async () => {
    await renameFile(oldFilePath, newFilePath)
};

await rename();