import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    try {
        const data = 'I am fresh and young';
        const path = __dirname + '/files/fresh.txt';
        fs.writeFile(path, data);
    } catch {
        return console.log('FS operation failed');
    }
};

await create();