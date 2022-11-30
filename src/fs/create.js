import  fs  from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { url } from 'inspector';
import path  from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'Im fresh and young';
     fs.access(pathToFile, fs.F_OK, async (err) => {
        if (err) {
            await writeFile(pathToFile, content);
        } else {
            console.log('Error: fs operation failed')
        }
    })
};



await create();