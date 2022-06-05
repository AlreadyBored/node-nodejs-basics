import path from "path";
import fs from "fs/promises";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    try {
        const fileContent = await fs.readFile(filePath, 'utf8').catch(() => {
            throw new Error('FS operation failed');
        })
        console.log("\x1b[32m", fileContent, '\x1b[0m');
    } catch (e) {
        console.error('\x1b[31m', e.message, '\x1b[0m');
    }

};

read();
