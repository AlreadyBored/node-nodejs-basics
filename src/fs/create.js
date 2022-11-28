import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    fs.readFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'utf-8',
        (err, data) => {
            if (err) {
                fs.writeFile(
                    path.join(__dirname, 'files', 'fresh.txt'),
                    'I am fresh and young',
                    (err) => {
                        if (err) throw new Error('FS operation failed')
                        console.log('File created')
                    }
                )
            } else throw new Error('FS operation failed')
        }
    )
};

await create();