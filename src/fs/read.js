import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const toReadFile = currentDir + '/files/' + 'fileToRead.txt';

const read = async () => {

    if (!existsSync(toReadFile)) {
        console.error('source file doesnt exist');
        return;
    }
    
    try {
        const contents = await readFile(toReadFile, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error(err)
    }

};

await read();