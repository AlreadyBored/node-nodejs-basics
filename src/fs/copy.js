import fs from 'fs/promises'

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Get the URL of the current module
const currentModuleUrl = import.meta.url;

// Convert the URL to a file path
const currentModulePath = fileURLToPath(currentModuleUrl);

// Get the directory name
const currentDirectory = dirname(currentModulePath);

const sourceDir = path.join(currentDirectory, "files");
const targetDir = path.join(currentDirectory, "files_copy")
const copy = async () => {

    try {
        await fs.cp(sourceDir, targetDir, {
            recursive: true,
            force: false,
            errorOnExist: true });
    } catch {
        throw new Error ("operation failed");
    }

}

await copy();
