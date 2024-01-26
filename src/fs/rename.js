import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (item = '') => join(__dirname, 'files', item);

const rename = async () => {
    fs.access(getPath('properFilename.md'), fs.constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(getPath('wrongFilename.txt'), fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.rename(
                getPath('wrongFilename.txt'),
                getPath('properFilename.md'),
                (err) => {if(err) throw err}
            )
        }
    });
};

await rename();