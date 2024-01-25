import { dirname } from 'path';
import { existsSync, fileURLToPath } from 'url';
import { renameSync } from 'fs';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const srcFile = currentDir + '/files/' + 'wrongFilename.txt';
const distFile = currentDir + '/files/' + 'properFilename.md';

const rename = async () => {

    if (!existsSync(srcFile)) {
        console.error('source file doesnt exist');
        return;
    }

    if (existsSync(distFile)) {
        console.error('destination file already exist');
        return;
    }
    
    try {
        renameSync(srcFile, distFile);
    } catch (err) {
        throw new Error(err)
    }

};

await rename();