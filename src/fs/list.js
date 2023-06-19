import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const folder = path.join(__dirname, 'files');

    if (!existsSync(folder)) {
        throw new Error ('FS operation failed');
    }

    try {
        fs.readdir(folder, { withFileTypes: true }, (err, data) => {
            data.forEach((file) => {
                if (file.isFile()) {
                    console.log(file.name);
                }
            });
        });
    } catch (err) {
        console.log(err);
    }
};

await list();
