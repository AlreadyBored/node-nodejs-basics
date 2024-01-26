import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const create = async () => {
    const folderPath = path.join(__dirname, '.', 'files');
    const filePath = path.join(folderPath, 'fileToCreate.txt');
    const content = "I am fresh and young";

    if(!fs.existsSync(folderPath)) {
        console.error('Folder doesnt exist');
    }

    if(fs.existsSync(filePath)) {
        console.error('FS operation failed, file already exists');
        return;
    }
    fs.writeFileSync(filePath, content);
    console.log('Text file created successfully!');
};

await create();