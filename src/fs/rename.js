import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongFilenamePath = path.join(__dirname, 'files', 'wrongFileName.txt');
const properFilenamePath = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
    fs.rename(wrongFilenamePath, properFilenamePath, function(err) {
        if (err) {
            throw Error('FS operation failed')
        }
    });
};