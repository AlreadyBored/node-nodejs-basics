import path from 'path';
import fs from 'fs';
import url from 'url';

const read = async () => {
    const fileFolder = 'files_copy';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.access(path.join(__dirname, fileFolder, 'fileToRead.txt'), fs.constants.F_OK,(err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.readFile(path.join(__dirname, fileFolder, 'fileToRead.txt'), null, (err, buffer) => {
        if (err) {
            throw new Error(err.message);
        }

        console.log(buffer.toString())
    })
};

await read();