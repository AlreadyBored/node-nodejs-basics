import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
const properFilename = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    fs.rename(
        wrongFilename,
        properFilename,
        (err) => {
            if (err) {
                console.error('FS operation failed');
            };
        }
    );
};

await rename();