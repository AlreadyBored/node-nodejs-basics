import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname,'files','fileToRead.txt');

    if(!fs.existsSync(filePath)){
        throw new Error('FS operation failed');
    }

    let data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
};

await read();