import { rename as fsRename, stat as fsStat } from 'fs/promises';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const currentFileName = 'wrongFilename.txt';
const folderName = 'files';
const newFileName = 'properFilename.md';
const errorMessage = 'FS operation failed';
const currentFilePath = pathJoin(__dirname, folderName, currentFileName);
const newFilePath = pathJoin(__dirname, folderName, newFileName);

async function isExists(path) {
    try {
        await fsStat(path);
        return true;
    } catch {
        return false;
    }
};

const rename = async () => {
    if (!!(await isExists(currentFilePath)) && !(await isExists(newFilePath))) {
        await fsRename(currentFilePath, newFilePath);
    } else {
        throw new Error(errorMessage);
    }
};

await rename();