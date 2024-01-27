import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fresh.txt');

        await isFileExist(filePath, false);
        await writeFile(filePath, 'I am fresh and young');
    }  catch (e) {
        console.error(e.message);
    }
};

await create();
