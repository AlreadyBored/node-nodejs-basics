import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { rmSync, existsSync } from 'fs';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const removeFile = currentDir + '/files/' + 'fileToRemove.txt';

const remove = async () => {
    
    if (!existsSync(removeFile)) {
        console.error('source file doesnt exist');
        return;
    }
    
    try {
        rmSync(removeFile);
    } catch (err) {
        throw new Error(err)
    }

};

await remove();