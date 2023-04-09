import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';

const oldFilePath = path.join(__dirname, "files", oldFileName )
const newFilePath = path.join(__dirname, "files", newFileName )


const rename = async () => {
    try {
        const isSourceFileExists = await fs.access(oldFilePath).then(()=> true).catch(()=> false)
        if(!isSourceFileExists){
            throw new Error('FS operation failed');
        }

        const isNewFileExists = await fs.access(newFilePath).then(()=> true).catch(()=> false)
        if(isNewFileExists){
            throw new Error('FS operation failed');
        }

        await fs.rename(oldFilePath, newFilePath)
    } catch (error) {
        console.error(error.message)
    }

};

await rename();