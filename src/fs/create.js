import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILES_PATH = 'files';
const CREATE_FILE = 'fresh.txt';
const FILE_DATA = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const writeFile = async (pathToFile, data) => {
    await fsPromises.writeFile(pathToFile, data, { encoding: 'utf-8', flag: 'wx' }).catch(() => { throw new Error(ERROR_MESSAGE) });
};

const create = async () => {
    await writeFile(path.join(__dirname, FILES_PATH, CREATE_FILE), FILE_DATA);
};

await create();