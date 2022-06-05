import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
    fs.unlink(filePath, (err) => {
        if(err) throw  ('FS operation failed');
    }); 
};

remove();
