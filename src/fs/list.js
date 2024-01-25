import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const readFolder = currentDir + '/files/';

const list = async () => {
    
    if (!existsSync(readFolder)) {
        console.error('source folder doesnt exist');
        return;
    }
    
    try {
        const files = await readdir(readFolder);
        console.log(' ');
        console.log('list of files in "files" folder: ');
        console.log(' ');
        for (const file of files) {
            console.log(file);
        }
        console.log(' ');
    } catch (err) {
        throw new Error(err)
    }

};

await list();