import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    fs.cp(__dirname + '\\files', __dirname + '\\files_copy', { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err?.code === 'ERR_FS_CP_EEXIST' || err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        }        
    });
};

await copy();
