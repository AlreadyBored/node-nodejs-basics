import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkIsFolderExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return false; // File does not exist
        }
        throw error; // Re-throw if it's a different error
    }
}

async function copyFolder(sourcePath, destPath) {
    await fs.mkdir(destPath);

    const entries = await fs.readdir(sourcePath, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(sourcePath, entry.name);
        const destEntryPath = path.join(destPath, entry.name);

        if (entry.isDirectory()) {
            await copyFolder(srcPath, destEntryPath);
        } else {
            await fs.copyFile(srcPath, destEntryPath);
        }
    }
}

const copy = async () => {
    const path_to_copy = path.join(__dirname, 'files');
    const path_dest_copy = path.join(__dirname, 'files_copy');
    if(!await checkIsFolderExist(path_to_copy) || await checkIsFolderExist(path_dest_copy)) {
        throw new Error('FS operation failed');
    }
    await copyFolder(path_to_copy, path_dest_copy);
};

await copy();
