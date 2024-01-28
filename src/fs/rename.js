import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destinationPath = path.join(__dirname, 'files', 'properFilename.md');

    try{
        if(!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)){
            throw new Error('FS operation failed');
        }

        fs.rename(sourcePath, destinationPath, ()=>{});

    } catch (error) {
        throw error;
    }
};

await rename();