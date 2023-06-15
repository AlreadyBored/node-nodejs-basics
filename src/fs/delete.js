import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    fs.unlink(filePath,
        (err) => {
            if (err) {
                console.error('FS operation failed');
            };
        }
    )
};

await remove();