import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongFilenamePath = path.join(__dirname, 'files', 'wrongFileName.txt');
const properFilenamePath = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
    try {
        await fs.rename(wrongFilenamePath, properFilenamePath)
    } catch {
        throw Error('FS operation failed')
    }
};