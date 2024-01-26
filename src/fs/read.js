import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
   
    try {
        const content = await fs.promises.readFile(filePath, 'utf-8');
            if(!fs.existsSync(filePath)) {
                console.log('FS operation failed');
            } else {
                console.log(content)
            };
       
    } catch (error) {
            console.error('Error reading the file', error);
    }
};

await read();