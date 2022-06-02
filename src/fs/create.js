import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
    const filePath= path.join(__dirname, 'files', 'fresh.txt');
    if (fs.existsSync(filePath)) {
        console.error('FS operation failed');
    }
    fs.writeFile(filePath, 'I am fresh and young', (error) => {
        if (error) {
            throw new Error();
        }
    });
};

create();
