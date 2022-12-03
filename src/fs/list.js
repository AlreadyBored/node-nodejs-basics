import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = currentPath + '/files';

    if (!fs.existsSync(folderPath)) {
        console.log(1);
        throw 'FS operation failed';
    }

    fs.readdir(folderPath, (err, files) => {
        const arrFileNames = [];
        files.forEach(file => arrFileNames.push(file));
        console.log(arrFileNames);
    });
};

await list();