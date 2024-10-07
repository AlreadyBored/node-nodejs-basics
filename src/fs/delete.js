import { unlink as fsDeleteFile } from 'fs/promises';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const currentFileName = 'fileToRemove.txt';
const folderName = 'files';
const errorMessage = 'FS operation failed';
const currentFilePath = pathJoin(__dirname, folderName, currentFileName);

const remove = async () => {
    try {
        await fsDeleteFile(currentFilePath);
    } catch {
        throw new Error(errorMessage);
    }
};

await remove();