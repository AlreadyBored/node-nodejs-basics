import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const freshFilePath = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
    fs.writeFile(freshFilePath, "I am fresh and young", { flag: 'wx' }, function(err) {
        if(err) {
            throw Error('FS operation failed')
        }
    }); 
};