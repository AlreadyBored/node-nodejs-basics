import * as fsPromises from "node:fs/promises";

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'wrongFilename.txt');
    const newFilePath = join(targetDir, 'properFilename.md');
    const options = {
        overwrite: false
    };

    try {
        await fsPromises.rename(filePath, newFilePath, options)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();
