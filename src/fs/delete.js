import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath)
            .then(async ()=> {
                await fs.rm(filePath);
            })
            .catch(() => {
                throw new Error('FS operation failed');
            });
    } catch (e) {
        console.error('\x1b[31m', e.message, '\x1b[0m');
    }
};

remove();
