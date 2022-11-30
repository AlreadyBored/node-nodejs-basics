import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    fs.unlink(
        path.join(__dirname, 'fresh.txt'),
        (err) => {
            if (err) throw console.error('Error: FS operation failed');
            console.log('file delete');
        }
    )
};

await remove();