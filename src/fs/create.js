import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt'); 
const data = 'I am fresh and young';

export const create = async () => {
    fs.readFile(filePath, (err) => {
        if(err) {
            fs.writeFile(filePath, data, err => {
                if(err) throw ('FS operation failed');
            });
            return;
        }
        throw ('FS operation failed');
    });
    
};

create();
