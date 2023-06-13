import path from 'path';
import fs from 'fs';
import url from 'url';

const list = async () => {
    const fileFolder = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    fs.access(path.join(__dirname, fileFolder), fs.constants.F_OK,(err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.readdir(fileFolder, (err, files) => {
        if (err) {
            throw new Error(err.message)
        }

        files.forEach(item => console.log(item));
    });

};

await list();