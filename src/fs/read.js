import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

        await isFileExist(targetFilePath);

        const fileContent = await readFile(targetFilePath, 'utf-8');
        console.log(fileContent);
    } catch (e) {
        console.error(e);
    }
};

await read();
