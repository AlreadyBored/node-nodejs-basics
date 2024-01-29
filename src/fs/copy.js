import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const FILES_PATH_COPY = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const isExist = async (path) => await fsPromises.access(path).then(() => true).catch(() => false)

const copyDir = async (source, destination) => {
    const isOldDirExist = await isExist(destination)
    const isCopyDirExist = await isExist(source)

    if (isOldDirExist || !isCopyDirExist) {
        throw new Error(ERROR_MESSAGE)
    }

    await fsPromises.cp(source, destination, { recursive: true })
}

const copy = async () => {
    await copyDir(path.join(__dirname, FILES_PATH), path.join(__dirname, FILES_PATH_COPY))
};

await copy();
