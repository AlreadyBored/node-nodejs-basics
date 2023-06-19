import * as fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const workPath = `${dirname(fileURLToPath(import.meta.url))}/files`;
    
    fs.readdir(workPath)
        .then((res) => console.log(res))
        .catch(() => console.log(new Error('FS operation failed')))
};

await list();