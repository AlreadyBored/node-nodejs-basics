import { rename as renameFiles, access } from 'fs/promises';
import path from "path";

const fileOldName = 'wrongFilename.txt';
const fileNewName = 'properFilename.md';
const errorText = 'FS operation failed';

const __dirname = import.meta.dirname;
const pathToOldFile = path.resolve(__dirname, "files", fileOldName);
const pathToNewFile = path.resolve(__dirname, "files", fileNewName);

const fileExists = async (path) => {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
};

const rename = async () => {
    const oldFileExists = await fileExists(pathToOldFile);
    const newFileExists = await fileExists(pathToNewFile);

    if (!oldFileExists || newFileExists) {
        throw new Error(errorText);
    }

    await renameFiles(pathToOldFile, pathToNewFile);
};

await rename();