import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import { FSError } from '../utils/fs_error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WRONG_FILENAME = 'wrongFilename.txt';
const PROPER_FILENAME = 'properFilename.md';

const rename = async () => {
    try {
        const pathToWrongFile = path.join(__dirname, 'files', WRONG_FILENAME);
        const pathToRenamedFile = path.join(__dirname, 'files', PROPER_FILENAME);
        const isExist = await chechIfFileExist(pathToRenamedFile);
        if (!isExist) {
            await fs.rename(pathToWrongFile, pathToRenamedFile)
        } else {
            throw new FSError();
        }
       
    } catch {
        throw new FSError();
    }
};

const chechIfFileExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};

await rename();