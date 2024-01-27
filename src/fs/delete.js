import { unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

        await isFileExist(filePath);
        await unlink(filePath);
    } catch (e) {
        console.error(e.message);
    }
};

await remove();
