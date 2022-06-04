import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    // Write your code here 
    try {
        const content = "I am fresh and young";
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const filePath = path.join(__dirname, "files/fresh.txt");
        await fs.writeFile(filePath, content, 'utf8', { flag: 'wx' });
    } catch (error) {
        console.log('FS operation failed');
        throw new Error('FS operation failed');
    }

};

create();
