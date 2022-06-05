import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const freshFilePath = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
    try {
        await fs.writeFile(freshFilePath, "I am fresh and young", { flag: 'wx' })
    } catch {
        throw Error('FS operation failed');
    }
};