import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fresh.txt');

const create = async () => {
    fs.access(filename, (err) => {
        if(!err) {
            throw new Error('FS operation failed');
        }
        
        fs.writeFile(filename, 'I am fresh and young', () => {});
    });
};

await create();