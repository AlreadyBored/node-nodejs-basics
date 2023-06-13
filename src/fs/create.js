import path from 'path';
import fs from 'fs';
import url from 'url';

const create = async () => {
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    const fileFolder = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)

    fs.access(path.join(__dirname, fileFolder, fileName), fs.constants.F_OK,(err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.writeFile(path.join(__dirname, fileFolder, fileName), fileContent, (err, ) => {
        if (err) {
            throw new Error(err.message);
        }
    });

};

await create();