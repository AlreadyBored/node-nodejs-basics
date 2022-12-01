import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    fs.access(path.join(__dirname, 'files/fresh.txt'), constants.F_OK).then(() => {
        console.error('Error: FS operation failed');
    }).catch(() => {
        fs.writeFile(
            path.join(__dirname, 'files/fresh.txt'),
            'I am fresh and young',
            (err) => {
                if (err) throw err;
                console.log('file create');
            }
        )
    });
};

await create();