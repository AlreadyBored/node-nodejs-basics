import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const list = async () => {
    let listFiles = [];
    
    const folderPath = path.join(__dirname, 'files');
    const filesPath = fs.readdirSync(folderPath);
    
    if (!fs.pathExists(folderPath)) {
        console.error('FS operation failed');
    } else {
        filesPath.map(file => {
            listFiles.push(file);
        });
    }
    console.log(listFiles);
};

await list();