import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    }

    let fileContent;

    fs.readFile(fileToRead, { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;

        console.log(data);
    })
};

await read();