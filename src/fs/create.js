import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    fs.writeFile(
        filePath,
        text,
        (err) => {
            if (err) {
                console.error('FS operation failed')
            };
        }
    );
};

await create();
