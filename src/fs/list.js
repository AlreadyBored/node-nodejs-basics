import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.join(__dirname, 'files');
    
    if(!fs.existsSync(dirPath)){
        throw new Error('FS operation failed');
    }

    const files = fs.readdirSync(dirPath);

    console.log(files);

};

await list();
