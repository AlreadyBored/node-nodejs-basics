import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { unlink } from 'fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const removeFile = currentDir + '/files/' + 'fileToRemove.txt';

const remove = async () => {
    
    if (!existsSync(removeFile)) {
        console.error('source file doesnt exist');
        return;
    }
    
    try {
        await unlink(removeFile);
    } catch (err) {
        throw new Error(err)
    }

};

await remove();