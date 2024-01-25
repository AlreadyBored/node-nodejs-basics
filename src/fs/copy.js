import { dirname } from 'path';
import { existsSync, copyFileSync, mkdirSync } from 'fs';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);

const copy = async () => {

    const srcFiles = await readdir((currentDir + '/files'));
    
    if (!existsSync((currentDir + '/files'))) {
        console.error('source folder doesnt exist');
    }

    if (existsSync((currentDir + '/files_copy'))) {
        console.error('destination folder already exist');
    }

    try {

        mkdirSync((currentDir + '/files_copy'));

        srcFiles.forEach(element => {
            copyFileSync((currentDir + '/files/' + element), (currentDir + '/files_copy/' + element))
        });

    } catch (err) {
        throw new Error(err)
    }    

};

await copy();
