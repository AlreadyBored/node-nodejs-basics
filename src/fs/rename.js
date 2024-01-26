import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async (wrongFileName, properFileName) => {
    const wrongFile = path.join(__dirname, 'files', wrongFileName);
    const properFile = path.join(__dirname, 'files', properFileName);

    if(!fs.existsSync(wrongFile) || fs.existsSync(properFile)) {
        console.error('FS operation failed');
        return;
    }

    try {
        fs.rename(wrongFile, properFile, () => {
            console.log('File renamed successfully!');
        });
    } catch (error) {
        console.error('Error during renaming a file', error);
    }
};

await rename('wrongFilename.txt', 'properFilename.md');