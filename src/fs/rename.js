import { rename as renameFile } from 'node:fs/promises';
import path from 'node:path';
import { isExist } from './helpers.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    if (await isExist(newFilePath)) {
        throw new Error('FS operation failed')
    } else {
        await renameFile(filePath, newFilePath);
    }
};

await rename();
