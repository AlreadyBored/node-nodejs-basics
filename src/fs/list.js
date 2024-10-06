import fs from 'fs/promises';
import path from 'path';

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    // Write your code here 
    const folderPath = path.join(__dirname, 'files'); 

    try {
        await fs.access(folderPath);
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed');  
    }

    try {
        
        const files = await fs.readdir(folderPath);
        console.log(files); 
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed'); 
    }
};

await list();