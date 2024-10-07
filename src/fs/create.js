import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here
    const filePath = path.join(__dirname, 'files', 'fresh.txt');;
    const fileData = 'I am fresh and young';

    fs.access(filePath, fs.constants.F_OK)
        .then(() => {
            throw new Error();
        })
        .catch(async (error) => {
            if (error) throw new Error('FS operation failed');;
                
            await fs.writeFile(filePath, fileData);
            console.log('File created successfully');
        });
};

await create();