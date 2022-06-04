import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
    // Write your code here 

    const content = "I am fresh and young";
    const filePath = path.join(__dirname, "files/fresh.txt");
    await fs.writeFile(filePath, content, 'utf8', { flag: 'wx' }, (err) => {
        if (err) {
            console.log('FS operation failed');
            throw new Error('FS operation failed');
        }
        console.log('Файл создан');
    });


};

create();
