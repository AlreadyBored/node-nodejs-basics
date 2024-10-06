import fs from 'fs/promises'; 
import path from 'path'; 

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt'); 

    try {
        // check if file exists
        await fs.access(filePath); 
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed'); 
    }

    try {
        await fs.unlink(filePath);
        console.log('File deleted successfully'); 
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed');
    }
};

await remove();