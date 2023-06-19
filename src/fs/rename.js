import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const workPath = `${path.dirname(fileURLToPath(import.meta.url))}/files`;

    fs.rename(`${workPath}/wrongFilename.txt`, `${workPath}/properFilename.md`)
        .catch(() => {
            console.log(new Error('FS operation failed'))
        })
};

await rename();