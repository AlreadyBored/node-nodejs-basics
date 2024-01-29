import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const create = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    let content = 'I am fresh and young';
    fs.access(path.resolve(__dirname, 'files', 'fresh.txt'), (err) => {
        if (err) {
            fs.writeFile(path.resolve(__dirname, 'files', 'fresh.txt'), content, (err) => {
                if (err) {
                    console.log(err);
                }
                    console.log('File was writed on folder files');
            });
        } else {
            console.log('FS operation failed');
        }
    });
};

await create();