// @ts-ignore
import fs from "fs/promises";
// @ts-ignore
import path from "path";

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    // write your code here 
    const oldFileName = path.join(__dirname, 'files', 'wrongFilename.txt'); 
    const newFileName = path.join(__dirname, 'files', 'properFilename.md'); 
    
    try {
        // check if the old file exists
        await fs.access(oldFileName);
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed'); 
    }
    
    try {
        // check if the new file already exists
        await fs.access(newFileName);
        throw new Error('FS operation failed'); 
    } catch (error) {
        console.log(error)
        // ENOENT === new file does not exist
        if (error.code !== 'ENOENT') {
            throw new Error('FS operation failed'); 
        }
    }

    // rename 
    await fs.rename(oldFileName, newFileName);
    console.log('File renamed successfully'); 
};

await rename();