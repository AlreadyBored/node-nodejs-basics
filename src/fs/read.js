import { readFile as fsReadFile } from 'fs/promises';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const currentFileName = 'fileToRead.txt';
const filePath = 'files';
const errorMessage = 'FS operation failed';
const currentFilePath = pathJoin(__dirname, filePath, currentFileName);

const read = async () => {
    try {
        const insideContent = await fsReadFile(currentFilePath, 'utf-8');
        console.log(insideContent);
    } catch {
        throw new Error(errorMessage);
    }
}

await read();