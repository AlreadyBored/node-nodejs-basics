import { rename as renameFs, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newfilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await access(filePath, constants.F_OK);
        await renameFs(filePath, newfilePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();