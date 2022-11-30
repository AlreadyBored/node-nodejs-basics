import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFolder = path.join(__dirname, "files"); 
    fs.exists(pathFolder, (isExists) => {
        if (!isExists) throw (`FS operation failed`);
    });
    fs.readdir(pathFolder, (err, files) => {
        if (err) throw err;
        console.log(files);
    });
};

await list();