import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    try {
        const targetFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const renamedFilePath = path.join(__dirname, 'files', 'properFilename.md')

        await isFileExist(targetFilePath);
        await isFileExist(renamedFilePath, false);
        await fs.rename(targetFilePath, renamedFilePath)

    } catch (e) {
        console.error(e.message)
    }
};

await rename();
