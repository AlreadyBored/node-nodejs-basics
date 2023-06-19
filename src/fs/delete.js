import * as fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const workPath = `${dirname(fileURLToPath(import.meta.url))}/files`;

    fs.rm(`${workPath}/fileToRemove.txt`)
        .catch(() => {
            console.log(new Error('FS operation failed'))
        })
};

await remove();