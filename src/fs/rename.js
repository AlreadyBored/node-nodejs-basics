import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const target = __dirname + '\\files\\properFilename.txt';

    fs.readFile(target, (err) => {
        if (err?.code === 'ENOENT') {
            fs.rename(__dirname + '\\files\\/wrongFilename.txt', target, (err) => {
                if (err?.code === 'ENOENT') {
                    throw Error ('FS operation failed');
                } 
            });
        } else {
            throw Error ('FS operation failed');
        }
    });
};

await rename();