import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const create = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt')
    if (fs.existsSync(path.join(__dirname, 'files', 'fresh.txt'))) throw Error('FS operation failed')
    fs.writeFile(
        pathToFile,
        'I am fresh and young',
        (err) => {
            if (err) throw Error('FS operation failed');
            console.log('File was created');
        }
    );
};

await create();