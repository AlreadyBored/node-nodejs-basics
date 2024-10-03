import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', "fileToRemove.txt");

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    fs.unlinkSync(filePath);
};

await remove();
