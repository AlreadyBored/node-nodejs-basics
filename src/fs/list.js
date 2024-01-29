import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const listeningDirPath = path.join(__dirname, FILES_PATH)

const isExist = async (path) => await fsPromises.access(path).then(() => true).catch(() => false)

const listeningDir = async (path) => {
    const isDirExist = await isExist(path)

    if (!isDirExist) {
        throw new Error(ERROR_MESSAGE)
    }

    const items = await fsPromises.readdir(path)

    console.log(...items)
}

const list = async () => {
    listeningDir(listeningDirPath)
};

await list();