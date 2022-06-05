import path from "path";
import fs from "fs/promises";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    const filePath = path.resolve(__dirname, 'files');

    try {
        const files = await fs.readdir(filePath).catch(() => {
            throw new Error('FS operation failed');
        });
        for (const file of files) console.log("\x1b[32m", file, '\x1b[0m');
    } catch (e) {
        console.error('\x1b[31m', e.message, '\x1b[0m');
    }
};

list();
