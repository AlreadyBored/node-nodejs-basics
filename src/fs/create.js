import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', "fresh.txt");

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await create();
