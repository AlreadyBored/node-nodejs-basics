import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fileToRead.txt';
const folderName = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, folderName, fileName);

const read = async () => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8', {flag: "wx"})
        console.log(fileContent);
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await read();