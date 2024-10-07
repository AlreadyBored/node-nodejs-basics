import fs from 'node:fs';
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const create = async () => {
    const freshPath = path.join(__dirname, 'files', 'fresh.txt');
    fs.access(freshPath, fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed')
        }
        fs.writeFile(freshPath, 'I am fresh and young', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File was been created!');
        });
    });
};

await create();
