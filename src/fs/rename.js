import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files');

export const rename = async () => {
    fs.rename(
        path.join(filePath, 'wrongFilename.txt'),
        path.join(filePath, 'properFilename.md'),
        err => {
            if(err) throw ('FS operation failed');
        }
    ) 
};

rename();
