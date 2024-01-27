import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const targetFolderPath = path.join(__dirname, 'files');

        await isFileExist(targetFolderPath);

        const filesList = await readdir(targetFolderPath);
        console.log(JSON.stringify(filesList));
    } catch (e) {
        console.error(e);
    }
};

await list();
