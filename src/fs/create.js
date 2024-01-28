import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullFilePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    if (fs.existsSync(fullFilePath)) {
        throw new Error('FS operation failed');
    }

    fs.appendFile(fullFilePath, 'I am fresh and young', err => {
        if (err) throw err;

        console.log('*** File created successfully! ***');
    })
};

await create();