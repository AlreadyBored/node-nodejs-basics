import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const folder = './files';
const messageOfError =  'FS operation failed';

const list = async (dirName, errorMessage) => {
    
    const errMessage = new Error(errorMessage);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteFolderPath = path.join(__dirname, dirName);

    try {
        const fileList = await fs.readdir(absoluteFolderPath, { withFileTypes: true });
        const filteredList = fileList.filter(item => !item.isDirectory()).map(item => item.name);
        console.log(filteredList);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw errMessage;    
        } else {
            console.error(err.message);
        }
    }
};

await list(folder, messageOfError);